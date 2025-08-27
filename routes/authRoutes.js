const express = require("express");
const { register, login } = require("../controllers/authController");
const { body } = require("express-validator");

const router = express.Router();

// validators
const emailValidator = body("email")
	.isEmail().withMessage("Email must be valid")
	.normalizeEmail();

const passwordStrong = body("password")
	.isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
	.matches(/[A-Za-z]/).withMessage("Password must include a letter")
	.matches(/\d/).withMessage("Password must include a number")
	.trim(); // avoid .escape() on passwords to preserve exact chars

// routes
router.post("/register", [emailValidator, passwordStrong], register);
router.post("/login", [
	emailValidator,
	body("password").notEmpty().withMessage("Password is required").trim()
], login);

module.exports = router;
