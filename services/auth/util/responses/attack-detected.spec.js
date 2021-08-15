const test = require("ava");
const sinon = require("sinon");

test.before((t) => {

    t.context.attackDetectedReponse = require("./attack-detected");

    t.context.res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
    };
});

test("should return the correct given message", (t) => {
    t.context.attackDetectedReponse(t.context.res);

    t.true(t.context.res.status.calledWithExactly(418));
    t.true(
        t.context.res.json.calledWithExactly({
            success: false,
            message: "Permission denied" 
        }),
    );
})
