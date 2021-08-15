const validatePhoneNumber = (number) => {
    // eslint-disable-next-line no-control-regex
    if (/^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/.test(number)) { // check if the number is valid
      return (false); // if it is, return false
    }
  
    return (true); // otherwise it's not valid, return true
  };
  
  module.exports = validatePhoneNumber
  
  