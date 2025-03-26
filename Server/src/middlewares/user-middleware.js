const express = require("express");
const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  try {
    //Get the token from the cookies or header
    const token =
      req.cookies?.token || req.header("Authorization")?.split(" ")[1] || "";
    if (!token) {
      return res.status(401).json({ message: "You are not authenticated" });
    }

    // Verify the token
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (!payload) {
      return res.status(401).json({ message: "Token is invalid" });
    }

    // If the token is valid, add the user to req.user
    req.user = await userModel.findOne({ _id: payload.id });
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
