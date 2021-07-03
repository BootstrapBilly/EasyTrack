const test = require("ava");

test.before((t) => {

    t.context.sanitize = require("./sanitize.js")
});

test("should not modify clean data -> string", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData:[ "hello"]
    };
    const result = t.context.sanitize(["hello"]);

    t.deepEqual(result, expected);
})

test("should not modify clean data -> string with space", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData:[ "hello there"]
    };
    const result = t.context.sanitize(["hello there"]);

    t.deepEqual(result, expected);
})

test("should not modify clean data -> numbers", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData:[32423234234243]
    };
    const result = t.context.sanitize([32423234234243]);

    t.deepEqual(result, expected);
})

test("should not modify clean data -> should allow .", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData:["hi."]
    };
    const result = t.context.sanitize(["hi."]);

    t.deepEqual(result, expected);
})

test("should not modify clean data -> should allow !", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData:["hi!"]
    };
    const result = t.context.sanitize(["hi!"]);

    t.deepEqual(result, expected);
})

test("should not modify clean data -> should allow email adresses", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData:["hi@outlook.com"]
    };
    const result = t.context.sanitize(["hi@outlook.com"]);

    t.deepEqual(result, expected);
})

test("should not modify clean data -> should allow - and _", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData:["hi - yes _ no"]
    };
    const result = t.context.sanitize(["hi - yes _ no"]);

    t.deepEqual(result, expected);
})

test("should not not accept malformed request bodies -> objects", (t) => {
    const expected = {
        malformedReqBody: true,
        sanitizedData: undefined
    };
    const result = t.context.sanitize([{hi: true}]);

    t.deepEqual(result, expected);
})

test("should not not accept malformed request bodies -> arrays", (t) => {
    const expected = {
        malformedReqBody: true,
        sanitizedData: undefined
    };
    const result = t.context.sanitize([[1]]);

    t.deepEqual(result, expected);
})

test("should not not accept malformed request bodies -> booleans", (t) => {
    const expected = {
        malformedReqBody: true,
        sanitizedData: undefined
    };
    const result = t.context.sanitize([true]);

    t.deepEqual(result, expected);
})

test("should not not accept malformed request bodies -> functions", (t) => {
    const expected = {
        malformedReqBody: true,
        sanitizedData: undefined
    };
    const result = t.context.sanitize([()=> alert("hi")]);

    t.deepEqual(result, expected);
})

test("should not not accept malformed request bodies -> falsy values", (t) => {
    const expected = {
        malformedReqBody: true,
        sanitizedData: undefined
    };
    const result = t.context.sanitize([null]);

    t.deepEqual(result, expected);
})

test("should remove banned characters -> < and > tags", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData: [" script "]
    };
    const result = t.context.sanitize(["<script>"]);

    t.deepEqual(result, expected);
})

test("should remove banned characters -> parentheses ( and )", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData: [" script "]
    };
    const result = t.context.sanitize(["(script)"]);

    t.deepEqual(result, expected);
})

test("should remove banned characters -> backslash /", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData: [" script"]
    };
    const result = t.context.sanitize(["/script"]);

    t.deepEqual(result, expected);
})

test("should remove banned characters -> forward slash \\", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData: [" script"]
    };
    const result = t.context.sanitize(["\\script"]);

    t.deepEqual(result, expected);
})

test("should remove banned characters -> colon :", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData: ["javascript alert Hi "]
    };
    const result = t.context.sanitize(["javascript:alert('Hi')"]);

    t.deepEqual(result, expected);
})

test("should remove banned characters -> quotes \"", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData: ["hi src "]
    };
    const result = t.context.sanitize(["hi src\""]);

    t.deepEqual(result, expected);
})

test("should remove banned characters -> single quotes '", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData: ["hi src "]
    };
    const result = t.context.sanitize(["hi src''"]);

    t.deepEqual(result, expected);
})

test("should remove banned characters -> equals = ", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData: ["hi "]
    };
    const result = t.context.sanitize(["hi ="]);

    t.deepEqual(result, expected);
})

test("should remove banned characters -> brackets { } ", (t) => {
    const expected = {
        malformedReqBody: false,
        sanitizedData: ["hi "]
    };
    const result = t.context.sanitize(["hi {}"]);

    t.deepEqual(result, expected);
})

