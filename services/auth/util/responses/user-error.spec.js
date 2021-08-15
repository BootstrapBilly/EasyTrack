const test = require("ava");
const sinon = require("sinon");

test.before((t) => {

    t.context.userErrorResponse = require("./user-error");

    t.context.res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis(),
    };
});

test("should return the correct given message", (t) => {
    const message = "some error";
    
    t.context.userErrorResponse(t.context.res, message);

    t.true(t.context.res.status.calledWithExactly(424));
    t.true(
        t.context.res.json.calledWithExactly({
            success: false,
            message,
        }),
    );
})

test("should return the correct given other fields", async (t) => {
    const message = "some errors";
    const otherFields = {
        one: "one",
        two: "two",
    }
    
   t.context.userErrorResponse(t.context.res, message, otherFields);

   t.true(t.context.res.status.calledWithExactly(424));
    t.true(
        t.context.res.json.calledWithExactly({
            success: false,
            message,
            ...otherFields,
        }),
    );
})

