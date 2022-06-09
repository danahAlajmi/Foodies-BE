const express = require("express");
const router = express.Router();
const {
  CategoryGet,
  CreateCategory,
  fetchCategory,
} = require("./cat.controllers");

//middleware
router.param("name", async (req, res, next, name) => {
  const category = await fetchCategory(name, next);
  if (category) {
    req.category = category;
    next();
  } else {
    const error = new Error("ERROR 404!");
    error.status = 404;
    next(error);
  }
});

router.get("/", CategoryGet);
router.get("/", fetchCategory);
router.post("/", CreateCategory);

module.exports = router;
