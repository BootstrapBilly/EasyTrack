const { User } = require("../models");
const { checkRequiredValue, userErrorResponse, serverErrorResponse } = require("../util");
const commonPassword = require("common-password-checker");
const bcrypt = require('bcrypt');

const changePassword = async (req, res) => {
    const { userId, token, password } = req.body; // extract the required info from the req
    try {
        const user = await User.findOne({ _id: userId, resetToken: token }) //find the user with the given user id and reset token

        // user and token validation
        if (!user) return res.status(418).json({ success: false, message: "You do not have permission to change this password" })// user does not exist, send error response
        if (user.tokenExpiration < Date.now()) return res.status(401).json({ success: false, message: "Your link has expired, please request a new one" }) // token expired, send error response

        // password validation
        const passwordTooShort = checkRequiredValue({ value: password }, { length: 8}); // ensure the password is at least 8 characters
        if(passwordTooShort) return userErrorResponse(res, "Password must be at least 8 characters", { field: "password" }); // if it is too short, send an error response
     
        const commonPasswordFound = commonPassword(password);
        if(commonPasswordFound) return userErrorResponse(res, "Common password detected, please use a better one", { field: "password" }); // if it is too short, send an error response

        // password hashing
        const hashedPassword = await bcrypt.hash(password, 12) // hash the password with a salt of 12

        // update the user
        await user.update({
            password: hashedPassword, // set the users new password
            $unset: { resetToken: "", tokenExpiration: "" } // remove the token and expiry
        })

        return res.status(201).json({ success: true, message:"Your password has been updated"})//return a success response
    }

    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server error
    }
}

module.exports = changePassword;