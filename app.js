const express = require("express");
const connectDb = require("./database");
const app = express();
<<<<<<< HEAD
const CategoryRoutes = require("./api/category/cat.routes");
const mongoose = require("mongoose");
const cors = require("cors");
=======
const cors = require("cors");
const recipeRoutes = require("./api/recipe/recipe.routes");
>>>>>>> f675a5e0b08370d628ebf926b488d04ca179f157

//////////////
connectDb();
app.use(express.json());
app.use(cors());
<<<<<<< HEAD
app.use("/Category", CategoryRoutes);
=======

//routers
app.use("/recipe", recipeRoutes);
>>>>>>> f675a5e0b08370d628ebf926b488d04ca179f157

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
