const { User } = require("../../models");
const { userErrorResponse, serverErrorResponse, sanitize, attackDetectedResponse } = require("@billyjames/util-packages");
const bcrypt = require('bcrypt');

const deleteUser = async (req, res) => {
    try {
        const { userId: dirtyUserId, password: dirtyPassword } = req.body;
        
        // data sanitization
        const { malformedReqBody, sanitizedData } = sanitize([dirtyUserId, dirtyPassword]);
        if (malformedReqBody) return attackDetectedResponse(res); // if the req body is malformed, do not proceed any further

        const [userId, password] = sanitizedData;

        const user = await User.findById(userId)//find the given user id
        if (!user) return userErrorResponse(res, "User not found"); // if they dont exist, send an erroneous reponse

        const passwordMatches = await bcrypt.compare(password, user.password)//use bcyrpt to check if the hashed password in the db matches the given password
        if (!passwordMatches) return userErrorResponse(res, "Your password does not match"); // if the password does not match, send an erroneous response

        await User.deleteOne({_id: userId}); //delete the user

        res.cookie("jwt-refresh", null, {
            httpOnly: true,
            sameSite: 'none', 
            secure: true,
            maxAge: 604800000,
        });

        res.cookie("user", null, {
            httpOnly: true,
            sameSite: 'none', 
            secure: true,
            maxAge: 604800000,
        });

        return res.status(200).json({ success: true })
    }
    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server error
    }
}

module.exports = deleteUser;
