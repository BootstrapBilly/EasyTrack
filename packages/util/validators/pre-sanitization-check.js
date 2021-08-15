const preSanitizationCheck = ({ value }) => {
    const regex = /[^\sA-Za-z0-9!.@_-]/;

    if(regex.test(value)){
        const invalidChar = regex.exec(value)[0];
        
        return invalidChar;
    } 
    return null;
}

module.exports = preSanitizationCheck;

