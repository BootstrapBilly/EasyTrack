const test = require("ava");

test.before((t) => {

    t.context.validateEmailAddress = require("./validate-email-address.js")
});

test("should return false with a valid email", (t) => {
    const expected = false;
    const result = t.context.validateEmailAddress("validemail@address.com");

    t.deepEqual(result, expected);
})

test("should return true with an invalid email", (t) => {
    const expected = true;
    const result = t.context.validateEmailAddress("invalid");

    t.deepEqual(result, expected);
})

test("should return true with no email", (t) => {
    const expected = true;
    const result = t.context.validateEmailAddress(null);

    t.deepEqual(result, expected);
})

test("should return true with all whitespace email", (t) => {
    const expected = true;
    const result = t.context.validateEmailAddress("  ");

    t.deepEqual(result, expected);
})
