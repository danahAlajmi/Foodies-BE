const express = require("express");
const connectDb = require("./database");
const app = express();
const cors = require("cors");
const recipeRoutes = require("./api/recipe/recipe.routes");

//////////////
connectDb();

app.use(express.json());
app.use(cors());

//routers
app.use("/recipe", recipeRoutes);

//middlewares
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
