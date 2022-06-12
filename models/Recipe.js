const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
<<<<<<< HEAD
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
=======

>>>>>>> a3e455868ae5d2712711c178fa6e3626c91e37d2
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },

  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
