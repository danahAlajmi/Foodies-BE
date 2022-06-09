const express = require("express");
const connectDb = require("./database");
const app = express();
const cors = require("cors");
const ingredientRoutes = require("./api/ingredients/ingredientRoute");

//////////////
connectDb();

app.use(express.json());

//ROUTES
app.use(cors());
app.use("/ingredients", ingredientRoutes);

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
