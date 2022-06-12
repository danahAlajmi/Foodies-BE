const Category = require("../../models/Category");
const Recipe = require("../../models/Recipe");

exports.recipeGet = async (req, res, next) => {
  try {
    const recipes = await Recipe.find({}, "-createdAt -updatedAt")
      .populate("category")
      .populate("ingredients")
      .populate("userId");

    res.json(recipes);
  } catch (error) {
    next(error);
  }
};

<<<<<<< HEAD
// exports.creatRecipe = async (req, res, next) => {
//   try {
//     const newRecipe = await Recipe.create(req.body);
//     res.status(201).json(newRecipe);
//   } catch (error) {
//     next(error);
//   }
// };
=======
exports.creatRecipe = async (req, res, next) => {
  const { categoryId } = req.params;
  req.body.category = categoryId;

  try {
    const newRecipe = await Recipe.create(req.body);
    await Category.findByIdAndUpdate(categoryId, {
      $push: { recipes: newRecipe._id },
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    next(error);
  }
};
>>>>>>> a3e455868ae5d2712711c178fa6e3626c91e37d2
