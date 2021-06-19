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
    resetToken:{type:String},
    tokenExpiration:{type:Number},
});

module.exports = mongoose.model("User", userSchema);