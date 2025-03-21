const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
function connect() {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB!"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
}

module.exports = connect;
