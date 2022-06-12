const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,

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
