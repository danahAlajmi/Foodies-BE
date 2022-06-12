//USER SCHEMA + RECIPE SCHEMA
const User = require("../../models/User");
const Recipe = require("../../models/Recipe");

//CREATE USER
exports.userCreate = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

//GET USER
exports.userGet = async (req, res, next) => {
  try {
    const theUser = await User.find();
    res.json(theUser);
  } catch (error) {
    next(error);
  }
};

//CREATE RECIPE
exports.recipeCreate = async (req, res, next) => {
  try {
    const { userId } = req.params;
    req.body.user = userId;
    const newRecipe = await Recipe.create(req.body);
    await User.findByIdAndUpdate(userId, {
      $push: { recipes: newRecipe._id },
    });
    // req.body.ingredient.push("pepsi");
    // const item = req.body.ingredient;
    // await console.log(item);
    // console.log(typeof req.body.ingredients);
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
