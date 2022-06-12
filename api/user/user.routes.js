const express = require("express");
const passport = require("passport");

const router = express.Router();

const { signUp, signIn, getUsers } = require("./user.controllers");

router.param("userId", async (req, res, next, userId) => {
  const user = await fetchUser(userId, next);
  if (user) {
    req.user = user;
    next();
  } else {
    const err = new Error("user Not Found");
    err.status = 404;
    next(err);
  }
});

router.post("/signup", signUp);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signIn
);
router.get("/users", getUsers);
module.exports = router;
