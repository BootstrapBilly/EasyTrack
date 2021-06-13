const express = require("express");
const mongoose = require("mongoose");
const { signup, login } = require("./controllers");

// config
const server = express();
const router = express.Router();

// middleware
server.use(express.json());
server.use(router);
server.use((req, res, next) => {

  //! lock this down to frontend url when deployed
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();

});

// routes
router.post("/signup", signup);
router.post("/login", login);

const MONGODBURI = "mongodb://Billy:Bau438xJSDLfPJ2@billy-shard-00-00-qqthk.mongodb.net:27017,billy-shard-00-01-qqthk.mongodb.net:27017,billy-shard-00-02-qqthk.mongodb.net:27017/EasyTrack?ssl=true&replicaSet=Billy-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose
  .connect(
    MONGODBURI, { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(result => {
    server.listen(process.env.PORT || 8080);
    console.log("\n\x1b[36mServer running on port 8080\n")
  })
  .catch(err => {
    console.log(err);
  });

