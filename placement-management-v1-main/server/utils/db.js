const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
// const URI = "mongodb://127.0.0.1:27017/gc_admin";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection Successful");
  } catch (error) {
    console.log("Database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
