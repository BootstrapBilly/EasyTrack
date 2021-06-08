const validateRequiredField = (field, body) => {
    if(!body[field] || // if the field is missing
        (body[field] && !body[field].trim()) // or it is truish, but all whitespace
    ){
        return field; // return the field to be sent as part of the response
    } 
    return null; // otherwise if it exists, return null
}

module.exports = validateRequiredField;