const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { body } = require("express-validator");

// Register a new user
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  userController.register
);

// Login an existing user
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  userController.login
);

// Get user profile
router.get("/profile", userController.getProfile);

//Logout an existing user
router.get("/logout", userController.logout);

module.exports = router;
