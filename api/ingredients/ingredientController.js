const Ingredient = require("../../models/Ingredient");

// exports.fetchIngredient = async (ingredientId, next) => {
//   try {
//     //get the ing id, then from tht id, get the corresponding recipe tht uses it and bring the recipe.
//     const ingredient = await Ingredient.findById(ingredientId).populate(
//       "Recipe"
//     );
//     return ingredient;
//   } catch (error) {
//     next(error);
//   }
// };

exports.ingredientCreate = async (req, res, next) => {
  try {
    const newIngredient = await Ingredient.create(req.body);
    res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
};

exports.ingredientGet = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
};
