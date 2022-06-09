const express = require("express");
const passport = require("passport");

const router = express.Router();

const { signUp, signIn, getUsers } = require("./user.controllers");

router.post("/signup", signUp);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signIn
);
router.get("/users", getUsers);
module.exports = router;
