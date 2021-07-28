/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const { signup, generate2facode, verify2facode, login, deleteUser, generateResetEmail, resetPassword } = require("./controllers");
const env = require("dotenv");
const helmet = require("helmet");
const { verifyjwt } = require("./middleware");
const cors = require('cors')

// config
const server = express();
const router = express.Router();
const protectedRouter = express.Router();
env.config();

// middleware
server.use(helmet());
server.use(express.json());
server.use(cors(
  // { origin: "https://geteasytrack.web.app"}
  ))

// routes 
server.use(router);

router.post("/signup", signup);
router.post("/login", login);

// jwt verification
server.use(verifyjwt);

// protected routes
server.use(protectedRouter);

protectedRouter.post("/generate2facode", generate2facode);
protectedRouter.post("/verify2facode", verify2facode);
protectedRouter.post("/delete-user", deleteUser);
protectedRouter.post("/password-reset", generateResetEmail);
protectedRouter.post("/reset-password", resetPassword);

mongoose
  .connect(
    process.env.DBSTRING, { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    server.listen(process.env.PORT || 8080);
    console.log("\n\x1b[36mServer running on port 8080\n")
  })
  .catch(err => {
    console.log(err);
  });

