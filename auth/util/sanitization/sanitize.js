const sanitize = (fields) => {
    let malformedReqBody = false;

    const permittedRequestFieldTypes = ["string", "number"]; // allow only strings and numbers, no nested objects, objects, arrays ect

    const sanitizedData = fields.reduce((acc, field) => {
        // This small API only deals with authentication and does not need any object like structures, it only deals with strings and numbers
        // if the request field is not a string, or number, e.g. an object or array, it did not come from the client, therefore must be an attacker
        if(!permittedRequestFieldTypes.includes(typeof field)){ 
            malformedReqBody = true;
            return;
        }

        if(typeof field === "number"){ // if its only a number, it cannot contain code, do not sanitize it
            acc.push(field);
        }
    
        else acc.push(field.replace(/[^A-Za-z0-9!.@_-]+/g," ")) // otherwise, replace any non permitted characters with " "

        return acc;
    }, [])

    return { malformedReqBody, sanitizedData }
}

module.exports = sanitize;
