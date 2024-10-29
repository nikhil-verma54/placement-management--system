const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  course_name: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: String, required: true },
  image_url: { type: String, required: true },
});

const Course = new model("Course", courseSchema);
module.exports = Course;
