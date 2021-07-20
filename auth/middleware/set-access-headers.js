const setAccessHeaders = ((req, res, next) => {

    //! lock this down to frontend url when deployed
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  
  });

  module.exports = setAccessHeaders;