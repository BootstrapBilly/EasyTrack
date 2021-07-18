const { serverErrorResponse } = require("../util");

const messagebird = require("messagebird")(process.env.MESSAGEBIRDKEY);

const generate2facode = async (req, res) => {
    const { phoneNumber } = req.body;

      const params = {
        originator: 'EasyTrack',
        recipients: [
          phoneNumber
      ],
        body: '%token is your EasyTrack verification code'
      };
      
    try {
        messagebird.messages.create(params, function (err, response) {
            if (err) {
              return console.log(err);
            }
            console.log(response);
          });
        return res.status(200).json({ success: true })
    }
    catch (error) { // if something fails in the try block
        return serverErrorResponse(res); // return a server error
    }
}

module.exports = generate2facode;