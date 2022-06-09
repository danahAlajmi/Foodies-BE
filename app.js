const express = require("express");
const connectDb = require("./database");
const app = express();
const cors = require("cors");
const recipeRoutes = require("./api/recipe/recipe.routes");
const userRoutes = require("./api/user/user.routes");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
//////////////
connectDb();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);
//routers
app.use("/recipe", recipeRoutes);
app.use("/user", userRoutes);

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
