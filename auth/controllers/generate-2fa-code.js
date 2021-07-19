const { User } = require("../models");
const { serverErrorResponse, userErrorResponse } = require("../util");
const crypto = require("crypto"); // generate random code for the text
const Cryptr = require('cryptr'); // encrypt/decrypt phone number
const cryptr = new Cryptr(process.env.ENCRYPTIONKEY);
const messagebird = require("messagebird")(process.env.MESSAGEBIRDKEY);

const generate2facode = async (req, res) => {      
  console.log(req.body, "generate")
    try {
      // extract phone number and user id from req body
      const { phoneNumber, userId } = req.body; // phone number is only sent when setting up 2fa, will be stored hashed in the db otherwise

      const user = await User.findById(userId); // find the user
      if(!user) return userErrorResponse(res, "No user found"); // if they dont exist, send a response

      if(!user.phoneNumber){ // if they do not have a phone number stored, store it
        const encryptedPhoneNumber = cryptr.encrypt(phoneNumber); // encrypt it first

        user.phoneNumber = encryptedPhoneNumber; // then store it
        await user.save(); // and save it
      }

      // generate a random token 
      const token = crypto.randomBytes(3).toString('hex');//generate a random token
      
      user.code2fa = token;
      user.expiry2fa = Date.now() + 900000;

      await user.save();

      // await User.findByIdAndUpdate(userId, { code2fa: token, expiry2fa: Date.now() + 900000 }); // store the token with 15 min expiry

      // generate a text message for the user with the given code
      const textMessage = { originator: 'EasyTrack', recipients: [cryptr.decrypt(user.phoneNumber)], body: `${token} is your EasyTrack verification code`};

      messagebird.messages.create(textMessage, (err, res) => {
        console.log(err);
        console.log(res);
      });

      return res.status(200).json({ success: true })
    }
    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server error
    }
}

module.exports = generate2facode;