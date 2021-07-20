const { attackDetectedResponse, serverErrorResponse } = require("../util");
const { verifyJWT } = require("../util/jwt");

// jwt verification
const verifyjwt = ((req, res, next) => {
    let decodedToken = null;
  
    try {
      if (!req.get("Authorization")) return attackDetectedResponse(res);
      const token = req.get("Authorization").split(" ")[1];
      decodedToken = verifyJWT(token);
    } catch (err) {
      return serverErrorResponse(res)
    }
  
    if(!decodedToken) { return attackDetectedResponse(res); }
  
    next();
  });

  module.exports = verifyjwt;