const express = require("express");
const router = express.Router();
const { userCreate, recipeCreate, userGet } = require("./userController");

router.post("/", userCreate);
router.get("/", userGet);
router.post("/:userId/recipes", recipeCreate);

module.exports = router;
