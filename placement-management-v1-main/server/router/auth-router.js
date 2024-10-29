const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middleware"); //  Validate middleware
const authMiddleware = require("../middlewares/auth-middleware"); //for  protecting routes

router.route("/").get(controller.home);
router.route("/register").post(validate(signupSchema), controller.register);
router.route("/login").post(validate(loginSchema), controller.login);

router.route("/user").get(authMiddleware, controller.user);

module.exports = router;
