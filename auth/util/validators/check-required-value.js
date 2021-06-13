/*
    param 1 (value) = value to check
    param 2 (length) = the required length of the value, defaults to 1 if no length supplied
*/

const checkRequiredValue = ({ value }, { length } = { length : 1 } ) => {
    if(!value || // if the key does not exist on the given object
        (value && value.trim().length < length) // or it does exist, but the length is less than what is required
    ){
        return true; // return the key 
    } 
    return null; // otherwise return null
}

module.exports = checkRequiredValue;