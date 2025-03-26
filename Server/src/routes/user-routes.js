const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const { body } = require("express-validator");
const {authUser} = require("../middlewares/user-middleware");

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
  userController.registerUser
);

// Login an existing user
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  userController.loginUser
);

// Get user profile
router.get("/profile", authUser, userController.getProfile);

//Logout an existing user
router.get("/logout", authUser, userController.logout);

module.exports = router;
