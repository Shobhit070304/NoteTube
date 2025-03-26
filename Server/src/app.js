require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const connect = require("./db/db");
const cookieParser = require("cookie-parser");

// Connect to MongoDB
connect();

// Routes
const userRoutes = require("./routes/user-routes");

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/api", function (req, res) {
  res.send("Hello, World!");
});

// Mount user routes
app.use("/api/users", userRoutes);

module.exports = app;
