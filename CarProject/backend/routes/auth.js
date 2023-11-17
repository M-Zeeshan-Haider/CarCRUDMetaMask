const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const validate = require("../middlewares/validation/validateSchema");
const signUpSchema = require("../schemas/signUpSchema");
const loginSchema = require("../schemas/signInSchema");

// Routes
router.post("/signUp", validate(signUpSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

module.exports = router;
