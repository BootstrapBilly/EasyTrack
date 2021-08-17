const jwt = require("jsonwebtoken");

const createJWT = ({userId, secret}) => {
    // eslint-disable-next-line no-undef
    return jwt.sign({userId}, secret, {expiresIn: "5m"})
}

module.exports = createJWT;
