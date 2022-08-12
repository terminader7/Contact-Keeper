import { connect } from "mongoose";
import { get } from "config";
const db = get("MONGODB_URI");

const connectDB = async () => {
  try {
    await connect(db, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
