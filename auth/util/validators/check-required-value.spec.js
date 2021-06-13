const test = require("ava");

test.before((t) => {

    t.context.validateRequiredField = require("./check-required-value.js")
});

test("should return null if the required value is present", (t) => {
    const expected = null;
    const result = t.context.validateRequiredField({value: "name"});

    t.deepEqual(result, expected);
})

test("should return true if the value is not present", (t) => {
    const expected = true;
    const result = t.context.validateRequiredField({value: " "});

    t.deepEqual(result, expected);
})

test("should return true if the value is all whitespace", (t) => {
    const expected = true;
    const result = t.context.validateRequiredField({value: "   "});

    t.deepEqual(result, expected);
})

test("should return true if the minimum length is not met", (t) => {
    const expected = true;
    const result = t.context.validateRequiredField({value: "hi"}, {length: 3});

    t.deepEqual(result, expected);
})