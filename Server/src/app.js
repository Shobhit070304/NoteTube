const express = require("express");
const app = express();

const connect = require("./db/db");

// Connect to MongoDB
connect();

// Routes
const userRoutes = require("./routes/user-routes");

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", function (req, res) {
  res.send("Hello, World!");
});

// Mount user routes
app.use("/api/users", userRoutes);

module.exports = app;
