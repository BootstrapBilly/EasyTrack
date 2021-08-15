const test = require("ava");
const sinon = require("sinon");
const proxyquire = require("proxyquire");

test.before((t) => {

    t.context.models = {
        User: {
            findById: sinon.stub(),
            deleteOne: sinon.stub(),
        }
    }

    t.context.bcrypt = {
        compare: sinon.stub(),
    }

    t.context.res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
    };

    t.context.deleteUser = proxyquire
    .noCallThru()
    .noPreserveCache()
    .load("./delete-user.js", {
        "../../models": t.context.models,
        "bcrypt": t.context.bcrypt,
    });
});

test("should return the correct response when the given email does not exist", async (t) => {    
    t.context.models.User.findById.resolves(null);

    await t.context.deleteUser({ body: { userId: "1", password: "p4ss_w0drd" }}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(424));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: "User not found", 
    }))
})

test("should return the correct response when the password does not match", async (t) => {    
    t.context.models.User.findById.resolves({userId: "1"});
    t.context.bcrypt.compare.resolves(false);

    await t.context.deleteUser({ body: { userId: "1", password: "p4ss_w0drd" }}, t.context.res);

    t.true(t.context.res.status.calledWithExactly(424));

    t.true(t.context.res.json.calledWith({
        success: false,
        message: "Your password does not match", 
    }))
})


