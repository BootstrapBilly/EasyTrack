const jwt = require("jsonwebtoken");

const verifyJWT = ({ token, secret }) => {
    // eslint-disable-next-line no-undef
    return jwt.verify(token, secret)
}

module.exports = verifyJWT;
