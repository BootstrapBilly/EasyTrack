const { user } = require("../models");
const { validateRequiredField } = require("../util");

const signup = (req, res) => {

    // run all required fields through the validator
    for(field of ["email", "username", "password"]) {
        const missingField = validateRequiredField(field, req.body);

        if(missingField){
            return res.status(424).json({ //if any of them are missing, return an error
                success: false,
                message: `${missingField} is required`,
                field,
            })
        }
    }

    //all fields present, extract them from the request.
    const { email, username, password } = req.body;


    return res.status(201).json({
        success: true,
    })


}

module.exports = signup;