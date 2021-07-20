/* eslint-disable no-undef */
const { User } = require("../../models");
const { serverErrorResponse, userErrorResponse, sanitize, attackDetectedResponse } = require("../../util");
const crypto = require("crypto"); // generate random code for the text
const Cryptr = require('cryptr'); // encrypt/decrypt phone number
const cryptr = new Cryptr(process.env.ENCRYPTIONKEY);
const messagebird = require("messagebird")(process.env.MESSAGEBIRDKEY);

const generate2facode = async (req, res) => {      
    try {
      // extract phone number and user id from req body
      const { phoneNumber: dirtyPhoneNumber, userId: dirtyUserId } = req.body; // phone number is only sent when setting up 2fa, will be stored hashed in the db otherwise

      // data sanitzation
      const { malformedReqBody, sanitizedData } = sanitize([dirtyPhoneNumber || "", dirtyUserId]);
      if (malformedReqBody) return attackDetectedResponse(res); // if the req body is malformed, do not proceed any further
                  
      const [phoneNumber, userId] = sanitizedData;

      const user = await User.findById(userId); // find the user
      if(!user) return userErrorResponse(res, "No user found"); // if they dont exist, send a response

      if(!user.phoneNumber){ // if they do not have a phone number stored, store it
        const encryptedPhoneNumber = cryptr.encrypt(phoneNumber); // encrypt it first

        user.phoneNumber = encryptedPhoneNumber; // then store it
        await user.save(); // and save it
      }

      const token = crypto.randomBytes(3).toString('hex');//generate a random token
     
      user.code2fa = token; // store the token on the user
      user.expiry2fa = Date.now() + 900000; // set expiry date for 15 mins from now

      await user.save();

      // generate a text message for the user with the given code
      const textMessage = { originator: 'EasyTrack', recipients: [cryptr.decrypt(user.phoneNumber)], body: `${token} is your EasyTrack verification code`};

      messagebird.messages.create(textMessage, () => {});

      return res.status(200).json({ success: true })
    }
    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server error
    }
}

module.exports = generate2facode;