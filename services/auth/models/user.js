const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {type:String},
    resetToken: {type:String},
    tokenExpiration: {type:Number},
    code2fa: {type: String, minLength:6, maxLength:6},
    expiry2fa: {type:Number},
});

module.exports = mongoose.model("User", userSchema);