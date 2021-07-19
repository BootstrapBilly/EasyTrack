const { signup, login, deleteUser } = require("./user");
const { generate2facode, verify2facode } = require("./2fa");
const { generateResetEmail, resetPassword } = require("./resetPassword");

module.exports = {
    signup,
    generate2facode,
    verify2facode,
    login,
    deleteUser,
    generateResetEmail,
    resetPassword,
}