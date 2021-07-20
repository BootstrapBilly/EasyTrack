const jwt = require("jsonwebtoken");

const createJWT = ({userId}) => {
    // eslint-disable-next-line no-undef
    return jwt.sign({userId}, process.env.JWTSECRET, {expiresIn: "1h"})
}

module.exports = createJWT;
