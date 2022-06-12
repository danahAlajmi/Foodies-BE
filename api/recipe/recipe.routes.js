const express = require("express");
//const passport = require("passport");

const router = express.Router();

const { recipeGet } = require("./recipe.controllers");

router.get("/", recipeGet);

module.exports = router;
