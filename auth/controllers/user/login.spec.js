const test = require("ava");
const sinon = require("sinon");
const proxyquire = require("proxyquire");

test.before((t) => {

    t.context.models = {
        User: {
            findOne: sinon.stub(),
        }
    }

    t.context.bcrypt = {
        compare: sinon.stub(),
    }

    t.context.res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
    };

    t.context.invalidDetails = "Email or password combination incorrect, try again";

    t.context.login = proxyquire
    .noCallThru()
    .noPreserveCache()
    .load("./login.js", {
        "../models": t.context.models,
        "bcrypt": t.context.bcrypt,
    });
});

test("should return the correct response when the given email does not exist", async (t) => {    
    t.context.models.User.findOne.resolves(null);

    await t.context.login({ body: { email: "", password: "p4ss_w0drd" }}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(424));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: t.context.invalidDetails, 
    }))
})

test("should return the correct response when the given password does not match", async (t) => {    
    t.context.models.User.findOne.resolves({});
    t.context.bcrypt.compare.resolves(false);

    await t.context.login({ body: { email: "", password: "p4ss_w0drd" }}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(424));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: t.context.invalidDetails, 
    }))
})

test("should return the correct response when valid information is supplied", async (t) => {    
    t.context.models.User.findOne.resolves({_id: "a"});
    t.context.bcrypt.compare.resolves(true);

    await t.context.login({ body: { email: "", password: "p4ss_w0drd" }}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(200));

    t.true(t.context.res.json.calledWith({
        success: true,
        id: "a", 
    }))
})


