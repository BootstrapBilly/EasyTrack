const test = require("ava");
const sinon = require("sinon");
const proxyquire = require("proxyquire");

test.before((t) => {

    t.context.models = {
        User: {
            findById: sinon.stub(),
            update: sinon.stub(),
        }
    }

    t.context.res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
    };

    t.context.verify2facode = proxyquire
    .noCallThru()
    .noPreserveCache()
    .load("./verify-2fa-code.js", {
        "../models": t.context.models,
    });
});

test("should return the correct response when user is not found", async (t) => {    
    t.context.models.User.findById.resolves(null);

    await t.context.verify2facode({ body: { userId: "1", code: "1"}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(424));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: "No user found", 
    }))
})

test("should return the correct response when the code does not match", async (t) => {    
    t.context.models.User.findById.resolves({id: 1, code2fa: "2"});

    await t.context.verify2facode({ body: { userId: "1", code: {1: "1"}}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(424));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: "That code does not match, try again", 
    }))
})

test("should return the correct response when the code has expired", async (t) => {    
    t.context.models.User.findById.resolves({id: 1, code2fa: "1", expiry2fa: 0});

    await t.context.verify2facode({ body: { userId: "1", code: {1: "1"}}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(401));

    t.true(t.context.res.json.calledWith({
        success: false,
        resend: true,
        message: "Code expired, a new one has been sent" , 
    }))
})

test("should return the correct response when everything is okay", async (t) => {    
    t.context.models.User.findById.resolves({id: 1, code2fa: "1", expiry2fa: 9626679612158, update: sinon.stub()});

    await t.context.verify2facode({ body: { userId: "1", code: {1: "1"}}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(200));

    t.true(t.context.res.json.calledWith({
        success: true,
    }))
})

