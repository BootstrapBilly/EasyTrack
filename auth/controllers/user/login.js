const { User } = require("../../models");
const { userErrorResponse, serverErrorResponse, generateJWT, sanitize, attackDetectedResponse } = require("../../util");
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const invalidDetails = "Email or password combination incorrect, try again";

    try {         
        const { email: dirtyEmail, password: dirtyPassword } = req.body;
        
        // data sanitzation
        const { malformedReqBody, sanitizedData } = sanitize([dirtyEmail, dirtyPassword]);
        if (malformedReqBody) return attackDetectedResponse(res); // if the req body is malformed, do not proceed any further

        const [email, password] = sanitizedData;

        // login detail validation
        const user = await User.findOne({ email: { $regex: email.trim(), $options: "i" } }); // check if user exists
        if(!user) return userErrorResponse(res, invalidDetails); // send generic error response so email address is not compromised

        const passwordValid = await bcrypt.compare(password, user.password); // check if the password is valid
        if(!passwordValid) return userErrorResponse(res, invalidDetails); // send generic error response so email address is not compromised

        const jwt = generateJWT(user._id);

        return res.status(200).json({ // send a success response
            success: true,
            id: user._id, // with the user id
            jwt,
        });

    } 
    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server ever
    }

}

module.exports = login;