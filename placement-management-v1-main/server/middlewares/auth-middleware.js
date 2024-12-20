const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  // console.log("token from auth middleware", jwtToken);

  try {
    let isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // console.log("user data in auth middleware ", isVerified);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    // console.log(userData);

    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    return res.status(401).send({ error: "Invalid Token" });
  }
};

module.exports = authMiddleware;
