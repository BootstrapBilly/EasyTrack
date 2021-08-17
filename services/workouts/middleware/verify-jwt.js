const { attackDetectedResponse, serverErrorResponse, verifyJWT } = require("@billyjames/util-packages");

const verifyjwt = ((req, res, next) => {
    let decodedToken = null;
  
    try {
      if (!req.get("Authorization")) return attackDetectedResponse(res); // check if an authorization header is present
      const token = req.get("Authorization").split(" ")[1]; // split the token from the bearer
      
      decodedToken = verifyJWT({ token, secret: process.env.JWTSECRET }); // verify it
    } catch (err) {
      console.log(err)
      return serverErrorResponse(res) // return server error if something goes wrong
    }
  
    if(!decodedToken) { return attackDetectedResponse(res); } // if it was not verified, send an attack detected response
  
    next(); // if it was verified, move on to the next middleware
  });

  module.exports = verifyjwt;