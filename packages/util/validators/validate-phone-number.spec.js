const test = require("ava");

test.before((t) => {

    t.context.validatePhoneNumber = require("./validate-phone-number")
});

test("should return false with a valid number (standard)", (t) => {
    const expected = false;
    const result = t.context.validatePhoneNumber("07961450122");

    t.deepEqual(result, expected);
})

test("should return false with a valid number (+44)", (t) => {
    const expected = false;
    const result = t.context.validatePhoneNumber("+447961450122");

    t.deepEqual(result, expected);
})

test("should return true with an invalid number (too short)", (t) => {
    const expected = true;
    const result = t.context.validatePhoneNumber("3423432");

    t.deepEqual(result, expected);
})

test("should return true with an invalid number (too long)", (t) => {
    const expected = true;
    const result = t.context.validatePhoneNumber("07222222222222447961452");

    t.deepEqual(result, expected);
})

test("should return true with an invalid number (NAN)", (t) => {
    const expected = true;
    const result = t.context.validatePhoneNumber("3432ssss");

    t.deepEqual(result, expected);
})


