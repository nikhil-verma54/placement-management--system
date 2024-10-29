const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home Route
const home = async (req, res) => {
  try {
    res.status(200).send("From auth controller");
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

// Register Route
const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, year, semester, college, branch, password } = req.body;
    const userExits = await User.findOne({ email: email });
    if (userExits) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      year,
      semester,
      college,
      branch,
      password,
    });

    res.status(201).send({
      msg: "User created successfully!",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

// Login Route
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExits = await User.findOne({ email });
    if (!userExits) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // const isPasswordValid = await bcrypt.compare(password, userExits.password);

    const isPasswordValid = await userExits.comparePassword(password);
    if (isPasswordValid) {
      res.status(200).send({
        msg: "Login Successfull!",
        token: await userExits.generateToken(),
        userId: userExits._id.toString(),
      });
    } else {
      res.status(400).json({ message: "Invalid email or password " });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

// To send user Data
const user = (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
