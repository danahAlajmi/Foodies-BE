const express = require("express");
//const passport = require("passport");

const router = express.Router();

const { recipeGet } = require("./recipe.controllers");

router.get("/", recipeGet);
<<<<<<< HEAD
=======
router.post("/:categoryId/recipe", creatRecipe);
>>>>>>> a3e455868ae5d2712711c178fa6e3626c91e37d2

module.exports = router;
