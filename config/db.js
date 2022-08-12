const mongoose = require("mongoose");
const config = require("config");

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI || config.get("MONGODB_URI"), {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
