const jwt = require("jsonwebtoken");

const createRefreshJWT = ({userId, secret}) => {
    // eslint-disable-next-line no-undef
    return jwt.sign({userId}, secret, {expiresIn: "7d"})
}

module.exports = createRefreshJWT;
