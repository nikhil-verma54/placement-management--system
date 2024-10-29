const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid Email")
    .min(3, "Email must be at least of 3 characters")
    .max(255, "Email must not be more than 255 characters."),
  password: z
    .string({ required_error: "Password is required" })
    .trim(),
});

// register schema
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, "Name must be at least of 3 characters")
    .max(255, "Name must not be more than 255 characters."),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Invalid Email")
    .min(3, "Email must be at least of 3 characters")
    .max(255, "Email must not be more than 255 characters."),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, "Phone no must be at least of 10 digits")
    .max(20, "Phone no must not be more than 20 digits."),
  year: z
    .string({ required_error: "Year is required" })
    .trim(),
  semester: z
    .string({ required_error: "Semester is required" })
    .trim(),
  college: z
    .string({ required_error: "College is required" })
    .trim(),
  branch: z
    .string({ required_error: "Branch is required" })
    .trim(),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "Password must be at least of 6 characters")
    .max(15, "Password must not be more than 15 characters."),
});

module.exports = { signupSchema, loginSchema };
