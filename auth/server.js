const express = require("express");
const mongoose = require("mongoose");
const { signup, login, generateResetEmail, resetPassword } = require("./controllers");
const env = require("dotenv");

// config
const server = express();
const router = express.Router();
env.config();

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
router.post("/password-reset", generateResetEmail);
router.post("/reset-password", resetPassword);

mongoose
  .connect(
    process.env.DBSTRING, { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(result => {
    server.listen(process.env.PORT || 8080);
    console.log("\n\x1b[36mServer running on port 8080\n")
  })
  .catch(err => {
    console.log(err);
  });

