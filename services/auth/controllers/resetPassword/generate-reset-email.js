const { User } = require("../../models");
const crypto = require("crypto");
const { 
    validateEmailAddress, 
    userErrorResponse, 
    serverErrorResponse,  
    sanitize, 
    attackDetectedResponse 
} = require("@billyjames/util-packages");
const { sendPasswordResetEmail } = require("../../util");


const generateResetEmail = async (req, res) => {
    const responseMessage = "If your email address was found, we just sent you an email with instructions to reset your password";

    try {
        const { email: dirtyEmail } = req.body;

        // data sanitzation
        const { malformedReqBody, sanitizedData } = sanitize([dirtyEmail]);
        if (malformedReqBody) return attackDetectedResponse(res); // if the req body is malformed, do not proceed any further
        
        const [email] = sanitizedData;

        // email validation
        const invalidEmail = validateEmailAddress(email); // check to see if the email is valid
        if (invalidEmail) return userErrorResponse(res, "Enter a valid email address", { field: "email" }); // if the email is not valid, return an error response

        // user validation
        const user = await User.findOne({ email: { $regex: email.trim(), $options: "i" } }); // check if user exists
        if (!user) return userErrorResponse(res, responseMessage); // send generic error response so email address is not compromised

        // generate a random token 
        const token = crypto.randomBytes(32).toString('hex');//generate a random 32 char token

        // store the token and expiration on the user
        await User.findOneAndUpdate({ _id: user._id }, { resetToken: token, tokenExpiration: Date.now() + 36000000 })

        // send the reset email
        sendPasswordResetEmail(email, token, user._id)//send a password reset email, with the token and user id included

        //return a successful response and inform the user
        return res.status(200).json({
            success: true,
            message: responseMessage,
        })
    }
    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server ever
    }

}

module.exports = generateResetEmail;
