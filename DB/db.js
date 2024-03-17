import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MongoDB_URI}/ecommerce`);
    console.log("MONGO DB connected!!!");
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
