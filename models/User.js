const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
<<<<<<< HEAD
=======

>>>>>>> a3e455868ae5d2712711c178fa6e3626c91e37d2
  recipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
