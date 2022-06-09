const express = require("express");
//const passport = require("passport");

const router = express.Router();

const { recipeGet, creatRecipe } = require("./recipe.controllers");

router.get("/", recipeGet);
router.post("/", creatRecipe);

module.exports = router;
