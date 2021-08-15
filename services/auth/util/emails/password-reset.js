const dotenv = require('dotenv');

dotenv.config();

const mailjet = require ('node-mailjet').connect(process.env.MAILJETKEY1, process.env.MAILJETKEY2)//set up the mailjet API and enter the keys

const passwordResetEmail = async (email, token, userId) => {
   mailjet.post("send", {'version': 'v3.1'})
     .request({
       "Messages":[
         {
           "From": {
             "Email": `${process.env.EMAIL}`,//sent from
             "Name": "EasyTrack"
           },
           "To": [
             {
               "Email": email//sent to
             }
           ],
           "Subject": "EasyTrack password reset",//subject
           "HTMLPart": `
           <h3>  You requested a password reset email </h3>
           <h5> If this was not you, please ignore this email and secure your account and devices </h5>
 
           <p> Click this <a href="http://localhost:8080/reset-password/${token}/?userId=${userId}">link</a> to reset your password</p>
           `,
         }
       ]
     })
 }

 module.exports = passwordResetEmail;