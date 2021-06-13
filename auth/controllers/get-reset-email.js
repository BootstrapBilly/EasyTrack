const { User } = require("../models");
const crypto = require("crypto");
const { userErrorResponse, serverErrorResponse } = require("../util");

const getResetEmail = async (req, res) => {
    const { email } = req.body;

    const responseMessage = "If your email address was found, we just sent you an email with instructions to reset your password";

    try {         
        // // email validation
        // const invalidEmail = validateEmailAddress(email); // check to see if the email is valid
        // if(invalidEmail) return userErrorResponse(res, "Enter a valid email address", { field: "email" }); // if the email is not valid, return an error response

        // // user validation
        // const user = await User.findOne({ email: { $regex: email, $options: "i" } }); // check if user exists
        // if(!user) return userErrorResponse(res, responseMessage); // send generic error response so email address is not compromised

        // // generate a random token 
        // const token = crypto.randomBytes(32).toString('hex');//generate a random 32 char token


    } 
    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server ever
    }

}

module.exports = getResetEmail;

// const User = require("../models/User")//import the user model for interacting with the database
// const crypto = require("crypto");//import the built in crypto feature from node
// const bcrypt = require("bcryptjs")//import bcrypt to encrypt the password

// //util
// const send_email = require("../util/send_email")//import the email util function
// const validate_password = require("../util/validate_password")

// exports.generate_email = async (req, res, next) => {

//     if(!req.body.email) return res.status(400).json({message:"Bad request"})//if the email is missing, send a 400 and inform them bad request

//     const email = req.body.email.toLowerCase()//extract the email from the request body and convert it to lower

//     try {

//         const token = crypto.randomBytes(32).toString('hex');//generate a random 32 char token

//         exports.token = token;

//         const user = await User.findOne({ email_address: email })//find the given email in the database

//         //if it does not exist, send the same response to prevent people from abusing it to find real emails
//         if (!user) return res.status(200).json({ message: "If your email address was found, we just sent you an email with instructions to reset your password" })

//         //find the user, then set their reset token and expiration date                                                     1 hour from now
//         const token_set = await User.findOneAndUpdate({ _id: user._id }, { reset_token: token, token_expiration: Date.now() + 36000000 })

//         //then send the response, informing the user -> DO NOT SAY THAT THEIR EMAIL DOES/DOES NOT EXIST, TO PREVENT PEOPLE FROM ABUSING IT AND LEAKING EMAILS
//         if (token_set) {

//             send_email.password_reset(email, token, user._id)//send a password reset email, with the token and user id included

//             //return a successful response and inform the user
//             return res.status(200).json({ message: "If your email address was found, we just sent you an email with instructions to reset your password" })
//         }

//     }

//     catch (error) {

//         return res.status(500).json({ message: "Sorry, something went wrong with our server" })

//     }

// }