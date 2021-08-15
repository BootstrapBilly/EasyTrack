const test = require("ava");
const sinon = require("sinon");
const proxyquire = require("proxyquire");

test.before((t) => {

    t.context.models = {
        User: {
            findById: sinon.stub(),
            save: sinon.stub(),
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

    t.context.generate2facode = proxyquire
    .noCallThru()
    .noPreserveCache()
    .load("./generate-2fa-code.js", {
        "../../models": t.context.models,
        "crypto": t.context.crypto,
    });
});

test("should return the correct response when the user is not found", async (t) => {    
    t.context.models.User.findById.resolves(null);

    await t.context.generate2facode({ body: { phoneNumber: "07123456789", userId: "1"}}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(424));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: "No user found", 
    }))
})
