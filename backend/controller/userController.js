const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const models = require("../models");
const userDB = models.user;
require("dotenv").config;

//@desc Register new user
//@route POST /api/users
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check all fields to not be empty
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please add all fields" });
  }

  // Check if user Exists

  const userExists = await userDB.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await userDB.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid user data." });
  }
};

// Generate JWT token for the database
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//@desc Authenticate User
//@route POST /api/users/login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userDB.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }
};

//@desc Get user data
//@route POST /api/users/me
//@access PRIVATE
const getUserData = async (req, res) => {
  const { _id, name, email } = await userDB.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
};

module.exports = { registerUser, getUserData, loginUser };
