const express = require("express");
const connectDb = require("./database");
const app = express();
<<<<<<< HEAD
=======

>>>>>>> a3e455868ae5d2712711c178fa6e3626c91e37d2
const ingredientRoutes = require("./api/ingredients/ingredientRoute");
const CategoryRoutes = require("./api/category/cat.routes");
const mongoose = require("mongoose");
const cors = require("cors");
<<<<<<< HEAD
const recipeRoutes = require("./api/recipe/recipe.routes");
const userRoutes = require("./api/user/userRoutes");
=======

const recipeRoutes = require("./api/recipe/recipe.routes");
const userRoutes = require("./api/user/user.routes");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
>>>>>>> a3e455868ae5d2712711c178fa6e3626c91e37d2

//////////////
connectDb();
app.use(express.json());
app.use(cors());
<<<<<<< HEAD

app.use("/category", CategoryRoutes);
app.use("/ingredients", ingredientRoutes);
app.use("/recipe", recipeRoutes);
app.use("/user", userRoutes);
=======
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

//routers
app.use("/recipe", recipeRoutes);
app.use("/user", userRoutes);
app.use("/category", CategoryRoutes);
app.use("/ingredients", ingredientRoutes);

>>>>>>> a3e455868ae5d2712711c178fa6e3626c91e37d2
//middlewares

//Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

//Error Handling Middleware
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: "Internal Server Error" || err });
});

//PORT Number
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
