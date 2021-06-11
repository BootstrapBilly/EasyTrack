const test = require("ava");

test.before((t) => {

    t.context.validateRequiredField = require("./validate-required-field.js")
});

test("should return null if the required value is present", (t) => {
    const expected = null;
    const result = t.context.validateRequiredField("name", { name: "hi" });

    t.deepEqual(result, expected);
})

test("should return the name of the required field if the value is not present", (t) => {
    const expected = "name";
    const result = t.context.validateRequiredField("name", { name: "" });

    t.deepEqual(result, expected);
})

test("should return the name of the required field if the value is all whitespace", (t) => {
    const expected = "name";
    const result = t.context.validateRequiredField("name", { name: "    " });

    t.deepEqual(result, expected);
})