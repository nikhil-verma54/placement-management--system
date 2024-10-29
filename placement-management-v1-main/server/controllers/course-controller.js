const Course = require("../models/course-model");

const courses = async (req, res) => {
  try {
    // Get all the data from the API.
    let response = await Course.find();
    if (!response) {
      res.status(404).json({ mgs: "No Courses Found" });
    }
    res.status(200).json({ response });
  } catch (error) {
    console.log(`services : ${error}`);
  }
};

module.exports = courses;
