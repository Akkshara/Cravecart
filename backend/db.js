// backend/mongoDB.js
const mongoose = require("mongoose");
const mongoUrl = "mongodb://127.0.0.1:27017/Cravecart";
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
