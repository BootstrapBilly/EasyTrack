const { user } = require("../models");
const { validateRequiredField, validateEmailAddress } = require("../util");

const signup = (req, res) => {

    // run all required fields through the validator
    for (let field of ["email", "username", "password"]) {
        const missingField = validateRequiredField(field, req.body);

        if (missingField) {
            return res.status(424).json({ //if any of them are missing, return an error
                success: false,
                message: `${missingField} is required`,
                field,
            })
        }
    }

    //all fields present, extract them from the request.
    const { email, username, password } = req.body;

    const invalidEmail = validateEmailAddress(email);

    if(invalidEmail) {
        return res.status(424).json({ //if the email is not valid, return an error
            success: false,
            message: `Enter a valid email address`,
        })
    }


    return res.status(201).json({
        success: true,
    })


}

module.exports = signup;