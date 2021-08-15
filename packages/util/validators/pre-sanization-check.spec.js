const test = require("ava");

test.before((t) => {

    t.context.preSanitizationCheck = require("./pre-sanitization-check")
});

test("should not flag clean data -> string", (t) => {
    const result = t.context.preSanitizationCheck({value: "hello"});

    t.deepEqual(result, null);
})

test("should not flag clean data -> string with space", (t) => {
    const result = t.context.preSanitizationCheck({value: "hello there"});

    t.deepEqual(result, null);
})

test("should not flag clean data -> numbers", (t) => {
    const result = t.context.preSanitizationCheck({value: 32423234234243});

    t.deepEqual(result, null);
})

test("should not flag clean data -> should allow .", (t) => { 
    const result = t.context.preSanitizationCheck({value: "hi."});

    t.deepEqual(result, null);
})

test("should not flag clean data -> should allow !", (t) => { 
    const result = t.context.preSanitizationCheck({value: "hi!"});

    t.deepEqual(result, null);
})

test("should not flag clean data -> should allow email adresses", (t) => { 
    const result = t.context.preSanitizationCheck({value: "hi@outlook.com"});

    t.deepEqual(result, null);
})

test("should not flag clean data -> should allow - and _", (t) => { 
    const result = t.context.preSanitizationCheck({value: "hi - yes _ no"});

    t.deepEqual(result, null);
})

test("should flag banned characters -> < and > tags", (t) => { 
    const result = t.context.preSanitizationCheck({value: "<script>"});

    t.deepEqual(result, '<');
})

test("should flag banned characters -> parentheses ( and )", (t) => { 
    const result = t.context.preSanitizationCheck({value: "(script)"});

    t.deepEqual(result, '(');
})

test("should flag banned characters -> backslash /", (t) => { 
    const result = t.context.preSanitizationCheck({value: "/script"});

    t.deepEqual(result, '/');
})

test("should flag banned characters -> forward slash \\", (t) => { 
    const result = t.context.preSanitizationCheck({value: "\\script"});

    t.deepEqual(result, '\\');
})

test("should flag banned characters -> colon :", (t) => { 
    const result = t.context.preSanitizationCheck({value: "javascript:alert('Hi')"});

    t.deepEqual(result, ':');
})

test("should flag banned characters -> quotes \"", (t) => { 
    const result = t.context.preSanitizationCheck({value: "hi src\""});

    t.deepEqual(result, '"');
})

test("should flag banned characters -> single quotes '", (t) => { 
    const result = t.context.preSanitizationCheck({value: "hi src''"});

    t.deepEqual(result, '\'');
})

test("should flag banned characters -> equals = ", (t) => { 
    const result = t.context.preSanitizationCheck({value: "hi ="});

    t.deepEqual(result, "=");
})

test("should flag banned characters -> brackets { } ", (t) => { 
    const result = t.context.preSanitizationCheck({value: "hi {}"});

    t.deepEqual(result, "{");
})

