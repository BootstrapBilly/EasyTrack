const jwt = require("jsonwebtoken");

const verifyRefreshJWT = ({ token, secret }) => {
    // eslint-disable-next-line no-undef
    return jwt.verify(token, secret)
}

module.exports = verifyRefreshJWT;
