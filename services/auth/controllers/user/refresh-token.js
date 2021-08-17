const { serverErrorResponse, attackDetectedResponse, verifyRefreshJWT, generateJWT } = require("@billyjames/util-packages");

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies["jwt-refresh"];
        const user = req.cookies["user"];
        let newAccessToken;

        if(!refreshToken || !user){
            return res.status(401).json({message: "Unauthenticated"})
        }

        const decodedToken = verifyRefreshJWT({ token: refreshToken, secret: process.env.JWTREFRESHSECRET });

        if(!decodedToken) { return attackDetectedResponse(res); }
     
        const { userId } = user;

        newAccessToken = generateJWT({ userId, secret: process.env.JWTSECRET });

        return res.status(200).json({ success: true, jwt: newAccessToken, user })
    }
    catch (error) { // if something fails in the try block
        console.log(error)
        return serverErrorResponse(res); // return a server error
    }
}

module.exports = refreshToken;
