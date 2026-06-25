const mongoose = require("mongoose");
const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGO_URL;
  console.log("Connecting to MongoDB with URI:", mongoUri ? "[REDACTED]" : mongoUri);
  try {
    await mongoose.connect(mongoUri, {});
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};
module.exports = connectDB;


