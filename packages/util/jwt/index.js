const generateJWT = require("./generate-jwt");
const generateRefreshJWT = require("./generate-refresh-jwt");
const verifyJWT = require("./verify-jwt");
const verifyRefreshJWT = require("./verify-refresh-jwt");

module.exports = {
    generateJWT,
    generateRefreshJWT,
    verifyJWT,
    verifyRefreshJWT
}