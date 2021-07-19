const signup = require("./signup");
const generate2facode = require("./generate-2fa-code");
const verify2facode = require("./verify-2fa-code");
const login = require("./login");
const deleteUser = require("./delete-user");
const generateResetEmail = require("./generate-reset-email");
const resetPassword = require("./reset-password");

module.exports = {
    signup,
    generate2facode,
    verify2facode,
    login,
    deleteUser,
    generateResetEmail,
    resetPassword,
}