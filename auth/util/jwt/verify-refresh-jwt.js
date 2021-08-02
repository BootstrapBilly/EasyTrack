const jwt = require("jsonwebtoken");

const verifyRefreshJWT = (token) => {
    // eslint-disable-next-line no-undef
    return jwt.verify(token, process.env.JWTREFRESHSECRET)
}

module.exports = verifyRefreshJWT;
