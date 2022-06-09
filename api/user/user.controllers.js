const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXP } = require("../../secret/keys");

exports.signUp = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);
    const payload = {
      id: newUser._id,
      name: newUser.username,
      exp: Date.now() + JWT_EXP,
    };
    const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};
exports.signIn = async (req, res) => {
  const payload = {
    id: req.user._id,
    name: req.user.username,
    exp: Date.now() + JWT_EXP,
  };
  const token = jwt.sign(payload, JWT_SECRET);
  res.json({ token });
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (err) {
    res.status(500).json("Server Error");
  }
};
