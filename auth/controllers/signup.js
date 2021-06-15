const { User } = require("../models");
const { checkRequiredValue, validateEmailAddress, userErrorResponse, serverErrorResponse } = require("../util");
const commonPassword = require("common-password-checker");
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    const { email, username, password } = req.body;

    try {        
        // email validation
        const invalidEmail = validateEmailAddress(email); // check to see if the email is valid
        if(invalidEmail) return userErrorResponse(res, "Enter a valid email address", { field: "email" }); // if the email is not valid, return an error response

        const emailInUse = await User.findOne({email}); // check if that email is already in the database
        if(emailInUse) return userErrorResponse(res, "Email in use, try another one", { field: "email" }); // if the email is in use, send an error response

        // username validation
        const usernameTooShort = checkRequiredValue({ value: username }, { length: 3 }); // ensure the username is at least 3 characters
        if(usernameTooShort) return userErrorResponse(res, "Username must be at least 3 characters", { field: "username" }); // if it is too short, send an error response

        // password validation
        const passwordTooShort = checkRequiredValue({ value: password }, { length: 8}); // ensure the password is at least 8 characters
        if(passwordTooShort) return userErrorResponse(res, "Password must be at least 8 characters", { field: "password" }); // if it is too short, send an error response

        const commonPasswordFound = commonPassword(password);
        if(commonPasswordFound) return userErrorResponse(res, "Common password detected, please use a better one", { field: "password" }); // if it is too short, send an error response

        // password hashing
        const hashedPassword = await bcrypt.hash(password, 12) // hash the password with a salt of 12

        // validation passed, create the user
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        })

        return res.status(201).json({ // send a success response
            success: true,
            id: user._id, // with the user id
        });

    } 
    catch (error) { // if something fails in the try block
        console.log(error);
        return serverErrorResponse(res); // return a server ever
    }

}

module.exports = signup;