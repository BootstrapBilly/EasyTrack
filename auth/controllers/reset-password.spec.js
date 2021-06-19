const test = require("ava");
const sinon = require("sinon");
const proxyquire = require("proxyquire");

test.before((t) => {

    t.context.models = {
        User: {
            findOne: sinon.stub(),
            update: sinon.stub(),
        }
    }

    t.context.bcrypt = {
        hash: sinon.stub().resolves("$2b$12$0Bfo5lRHGOYQ8WQ9i6KCCeCsRDe4GRp8Yc5yasuFVMoEpqNTcD9ke"),
    }

    t.context.res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
    };

    t.context.resetPassword = proxyquire
    .noCallThru()
    .noPreserveCache()
    .load("./reset-password.js", {
        "../models": t.context.models,
        "bcrypt": t.context.bcrypt,
    });
});

test("should return the correct response when user id or token is not found", async (t) => {    
    t.context.models.User.findOne.resolves(null);

    await t.context.resetPassword({ body: { userId: "1", token: "1", password: "P4sd3ghb"}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(418));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: "You do not have permission to change this password", 
    }))
})

test("should return the correct response when reset token has expired", async (t) => {    
    t.context.models.User.findOne.resolves({_id: "1", email: "a@b.com", token: "1", tokenExpiration: 0 });

    await t.context.resetPassword({ body: { userId: "1", token: "1", password: "P4sd3ghb"}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(401));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: "Your link has expired, please request a new one", 
    }))
})

test("should return the correct response when all requirements are met and password is updated", async (t) => {    
    t.context.models.User.findOne.resolves({_id: "1", email: "a@b.com", token: "1", tokenExpiration: 90000000000000000000, update: sinon.stub() });

    await t.context.resetPassword({ body: { userId: "1", token: "1", password: "P4sd3ghb"}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(201));

    t.true(t.context.res.json.calledWith({
        success: true,
        message: "Your password has been updated", 
    }))
})