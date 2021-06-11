const validateRequiredField = (field, body) => {
    if(!body[field] ||
        (body[field] && !body[field].trim())
    ){
        return field;
    } 
    return null;
}

module.exports = validateRequiredField;