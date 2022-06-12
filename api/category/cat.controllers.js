const Category = require("../../models/Category");

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
<<<<<<< HEAD
    const categories = await Category.find().populate("recipes");
=======
    const categories = await Category.find(
      {},
      "-createdAt -updatedAt"
    ).populate("recipes");
>>>>>>> a3e455868ae5d2712711c178fa6e3626c91e37d2
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
