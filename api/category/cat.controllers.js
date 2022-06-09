const Category = require("../../models/category");

//create a category
exports.CreateCategory = async (req, res) => {
  try {
    const newCat = await Category.create(req.body);
    res.status(201).json(newCat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//middleware find Category by id
exports.fetchCategory = async (name, next) => {
  try {
    const foundCategory = Category.findById(name);
    if (foundCategory) {
      await foundCategory.findByIdAndUpdate(name);
      res.status(200).end();
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    next(error);
  }
};

exports.CategoryGet = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
