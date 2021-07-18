const { User } = require("../models");
const crypto = require("crypto");
const { userErrorResponse, serverErrorResponse } = require("../util");
const bcrypt = require('bcrypt');

const deleteUser = async (req, res) => {
    const { userId, password } = req.body;

    try {
        const user = await User.findById(userId)//find the given user id
        if (!user) return userErrorResponse(res, "User not found"); // if they dont exist, send an erroneous reponse

        const passwordMatches = await bcrypt.compare(password, user.password)//use bcyrpt to check if the hashed password in the db matches the given password
        if (!passwordMatches) return userErrorResponse(res, "Your password does not match"); // if the password does not match, send an erroneous response

        await User.deleteOne({_id: userId}); //delete the user

        return res.status(200).json({ success: true })
    }
    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server error
    }
}

module.exports = deleteUser;
