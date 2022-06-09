const express = require("express");
const connectDb = require("./database");
const app = express();
<<<<<<< HEAD
const cors = require("cors");
const ingredientRoutes = require("./api/ingredients/ingredientRoute");
=======
<<<<<<< HEAD
const CategoryRoutes = require("./api/category/cat.routes");
const mongoose = require("mongoose");
const cors = require("cors");
=======
const cors = require("cors");
const recipeRoutes = require("./api/recipe/recipe.routes");
>>>>>>> f675a5e0b08370d628ebf926b488d04ca179f157
>>>>>>> 4b76a398902cbacc5d7a686bdb353f914d0cf442

//////////////
connectDb();
app.use(express.json());
app.use(cors());
<<<<<<< HEAD
app.use("/Category", CategoryRoutes);
=======

<<<<<<< HEAD
//ROUTES
app.use(cors());
app.use("/ingredients", ingredientRoutes);

//middlewares
=======
//routers
app.use("/recipe", recipeRoutes);
>>>>>>> f675a5e0b08370d628ebf926b488d04ca179f157

//Not Found Middleware
>>>>>>> 4b76a398902cbacc5d7a686bdb353f914d0cf442
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
