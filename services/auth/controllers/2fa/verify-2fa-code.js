const { User } = require("../../models");
const { serverErrorResponse, userErrorResponse, sanitize, attackDetectedResponse } = require("@billyjames/util-packages");

const verify2facode = async (req, res) => {      
    try {
      // extract code and user id from req body
      const {code: dirtyCode, userId: dirtyUserId} = req.body;

      // data sanitzation
      const { malformedReqBody, sanitizedData } = sanitize([dirtyCode, dirtyUserId]);
      if (malformedReqBody) return attackDetectedResponse(res); // if the req body is malformed, do not proceed any further

      const [code, userId] = sanitizedData;

      const user = await User.findById(userId); // find the user
      if(!user) return userErrorResponse(res, "No user found"); // if they dont exist, send a response

      if(user.code2fa !== code) return userErrorResponse(res, "That code does not match, try again"); // if they dont exist, send a response
      if (user.expiry2fa < Date.now()) return res.status(401).json({ success: false, resend:true, message: "Code expired, a new one has been sent" })

      // update the user
      await user.update({ $unset: { code2fa: "", expiry2fa: "" } }) // remove the token and expiry

      return res.status(200).json({ success: true })
    }
    catch (error) { // if something fails in the try block
      console.log(error)
        return serverErrorResponse(res); // return a server error
    }
}

module.exports = verify2facode;