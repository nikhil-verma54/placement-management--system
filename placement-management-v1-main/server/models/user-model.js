const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userScheme = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  year: {
    type: String,
    require: true,
  },
  semester: {
    type: String,
    require: true,
  },
  college: {
    type: String,
    require: true,
  },
  branch: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// securing the password
userScheme.pre("save", async function () {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  // Hash the password with bcryptjs
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});
// Compare Password

userScheme.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// JWT (Json Web Token)
// to verify that a token is valid or not
userScheme.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// define the model or the collection name

const User = new mongoose.model("User", userScheme);
module.exports = User;
