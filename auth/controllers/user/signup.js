const { User } = require("../../models");
const { checkRequiredValue, validateEmailAddress } = require("@billyjames/util-packages");
const { userErrorResponse, serverErrorResponse, attackDetectedResponse, sanitize, generateJWT } = require("../../util");
const commonPassword = require("common-password-checker");
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        // sanitzation
        const { malformedReqBody, sanitizedData } = sanitize([email, username, password]);
        if (malformedReqBody) return attackDetectedResponse(res); // if the req body is malformed, do not proceed any further

        const [sanitzedEmail, sanitzedUsername, sanitzedPassword] = sanitizedData;

        // email validation
        const invalidEmail = validateEmailAddress(sanitzedEmail); // check to see if the email is valid
        if (invalidEmail) return userErrorResponse(res, "Enter a valid email address", { field: "email" }); // if the email is not valid, return an error response

        const emailInUse = await User.findOne({ email: sanitzedEmail }); // check if that email is already in the database
        if (emailInUse) return userErrorResponse(res, "Email in use, try another one", { field: "email" }); // if the email is in use, send an error response

        // username validation
        const usernameTooShort = checkRequiredValue({ value: sanitzedUsername }, { length: 3 }); // ensure the username is at least 3 characters
        if (usernameTooShort) return userErrorResponse(res, "Username must be at least 3 characters", { field: "username" }); // if it is too short, send an error response

        // password validation
        const passwordTooShort = checkRequiredValue({ value: sanitzedPassword }, { length: 8 }); // ensure the password is at least 8 characters
        if (passwordTooShort) return userErrorResponse(res, "Password must be at least 8 characters", { field: "password" }); // if it is too short, send an error response

        const commonPasswordFound = commonPassword(sanitzedPassword);
        if (commonPasswordFound) return userErrorResponse(res, "Common password detected, please use a better one", { field: "password" }); // if it is too short, send an error response

        // password hashing
        const hashedPassword = await bcrypt.hash(sanitzedPassword, 12) // hash the password with a salt of 12

        // validation passed, create the user
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        })

        const jwt = generateJWT(user._id);

        return res.status(201).json({ // send a success response
            success: true,
            id: user._id, // with the user id
            jwt,
        });

    }
    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server ever
    }

}

module.exports = signup;