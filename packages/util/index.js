const { checkRequiredValue, preSanitizationCheck, validateEmailAddress, validatePhoneNumber } = require("./validators");
const { userErrorResponse, serverErrorResponse, attackDetectedResponse } = require("./responses");
const { sanitize } = require("./sanitization");
const { generateJWT, generateRefreshJWT, verifyJWT, verifyRefreshJWT } = require("./jwt");

module.exports = {
    checkRequiredValue,
    preSanitizationCheck,
    validateEmailAddress,
    validatePhoneNumber,
    userErrorResponse,
    serverErrorResponse,
    attackDetectedResponse,
    sanitize,
    generateJWT,
    generateRefreshJWT, 
    verifyJWT, 
    verifyRefreshJWT,
}