const express = require("express");
const router = express.Router();
const {
  //   fetchIngredient,
  ingredientCreate,
  //   ingredientGet,
} = require("./ingredientController");

// router.param("ingredientId", async (req, res, next, ingredientId) => {
//   const ingredient = await fetchMonument(+ingredientId, next);
//   if (ingredient) {
//     req.post = ingredient;
//     next();
//   } else {
//     const err = new Error("Post Not Found");
//     err.status = 404;
//     next(err);
//   }
// });

router.post("/", ingredientCreate);

// router.get("/:ingredientId", fetchIngredient);

// router.get("/:RecipeId/ingredients", ingredientGet);

module.exports = router;
