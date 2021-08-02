const jwt = require("jsonwebtoken");

const createRefreshJWT = ({userId}) => {
    // eslint-disable-next-line no-undef
    return jwt.sign({userId}, process.env.JWTREFRESHSECRET, {expiresIn: "7d"})
}

module.exports = createRefreshJWT;
