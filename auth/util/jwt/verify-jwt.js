const jwt = require("jsonwebtoken");

const verifyJWT = (token) => {
    console.log(token);
    // eslint-disable-next-line no-undef
    return jwt.verify(token, process.env.JWTSECRET)
}

module.exports = verifyJWT;
