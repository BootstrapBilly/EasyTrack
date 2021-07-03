const signup = require("./signup");
const login = require("./login");
const deleteUser = require("./delete-user");
const generateResetEmail = require("./generate-reset-email");
const resetPassword = require("./reset-password");

module.exports = {
    signup,
    login,
    deleteUser,
    generateResetEmail,
    resetPassword,
}