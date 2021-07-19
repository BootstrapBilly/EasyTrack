const test = require("ava");
const sinon = require("sinon");
const proxyquire = require("proxyquire");

test.before((t) => {

    t.context.models = {
        User: {
            findOne: sinon.stub(),
            findOneAndUpdate: sinon.stub(),
        }
    }

    t.context.crypto = {
        toString: sinon.spy(),
        randomBytes: sinon.stub().returnsThis(),
    }

    t.context.res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
    };

    t.context.genericErrorMessage = "If your email address was found, we just sent you an email with instructions to reset your password";

    t.context.generateResetEmail = proxyquire
    .noCallThru()
    .noPreserveCache()
    .load("./generate-reset-email.js", {
        "../models": t.context.models,
        "crypto": t.context.crypto,
    });
});

test("should return the correct response when the given email is invalid", async (t) => {    
    await t.context.generateResetEmail({ body: { email: ""}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(424));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: "Enter a valid email address", 
        field: "email",
    }))
})

test("should return the correct response when the given email does not exist", async (t) => {    
    t.context.models.User.findOne.resolves(null);

    await t.context.generateResetEmail({ body: { email: "a@b.com"}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(424));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: t.context.genericErrorMessage, 
    }))
})

test("should return the correct response when the given email does exist", async (t) => {    
    t.context.models.User.findOne.resolves({_id: "1", email: "a@b.com"});
    t.context.models.User.findOneAndUpdate.resolves({_id: "1", resetToken: "1", tokenExpiration: 1 });

    await t.context.generateResetEmail({ body: { email: "a@b.com"}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(200));

    t.true(t.context.res.json.calledWith({
        success: true,
        message: t.context.genericErrorMessage, 
    }))
})
