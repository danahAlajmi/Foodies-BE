const express = require("express");
const connectDb = require("./database");
const app = express();
const CategoryRoutes = require("./api/category/cat.routes");
const mongoose = require("mongoose");

//////////////
connectDb();

app.use(express.json());
app.use("/Category", CategoryRoutes);

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
