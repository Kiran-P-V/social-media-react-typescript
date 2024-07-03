import mongoose from "mongoose";

const connectionToMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("\x1b[36m", "Connected to mongodb");
  } catch (error) {
    console.log("\x1b[31m", "Error connecting to mongodb", error);
  }
};

export default connectionToMongodb;
