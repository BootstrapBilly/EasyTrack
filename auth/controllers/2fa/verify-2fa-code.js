const { User } = require("../../models");
const { serverErrorResponse, userErrorResponse } = require("../../util");

const verify2facode = async (req, res) => {      
    try {
      // extract code and user id from req body
      const {code, userId} = req.body; // phone number is only sent when setting up 2fa, will be stored hashed in the db otherwise

      const user = await User.findById(userId); // find the user
      if(!user) return userErrorResponse(res, "No user found"); // if they dont exist, send a response

      const number = Object.entries(code).reduce((acc, current) => {
          return acc.concat(current[1]);
      }, [])

      if(user.code2fa !== number.join("")) return userErrorResponse(res, "That code does not match, try again"); // if they dont exist, send a response
      if (user.expiry2fa < Date.now()) return res.status(401).json({ success: false, resend:true, message: "Code expired, a new one has been sent" })

      // update the user
      await user.update({ $unset: { code2fa: "", expiry2fa: "" } }) // remove the token and expiry

      return res.status(200).json({ success: true })
    }
    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server error
    }
}

module.exports = verify2facode;