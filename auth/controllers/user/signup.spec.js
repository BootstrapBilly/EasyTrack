const test = require("ava");
const sinon = require("sinon");
const proxyquire = require("proxyquire");

test.before((t) => {

    t.context.models = {
        User: {
            findOne: sinon.stub(),
            create: sinon.stub(),
        }
    }

    t.context.bcrypt = {
        hash: sinon.stub().resolves("$2b$12$0Bfo5lRHGOYQ8WQ9i6KCCeCsRDe4GRp8Yc5yasuFVMoEpqNTcD9ke"),
    }

    t.context.res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
    };

    t.context.signup = proxyquire
    .noCallThru()
    .noPreserveCache()
    .load("./signup.js", {
        "../../models": t.context.models,
        "bcrypt": t.context.bcrypt,
    });
});

test("should return the correct response when the given email is in use", async (t) => {    
    t.context.models.User.findOne.resolves({email: "in@use.com"});

    await t.context.signup({ body: { email: "in@use.com", username: "user", password: "p4ss_w0drd" }}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(424));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: "Email in use, try another one", 
        field: "email"
    }))
})

test("should return 418 when a malformed request body has been supplied", async (t) => {    
    await t.context.signup({ body: { password: {p: "P4sd3ghf", yes: "no" }}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(418));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: "Permission denied", 
    }))
})

test("should return the correct response when the required info is present and valid", async (t) => {    
    t.context.models.User.findOne.resolves(null);
    t.context.models.User.create.resolves({_id: "a"});

    await t.context.signup({ body: { email: "a@b.c", username: "user", password: "p4ss_w0drd" }}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(201));
})

