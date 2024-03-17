import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    productId: {
      type: Number,
      unique: true,
      require: true,
    },
    productName: {
      type: String,
      require: true,
      lowercase: true,
    },
    productRating: {
      type: Number,
      min: 0,
      max: 5,
    },
    productReview: {
      type: String,
    },
  },
  { Timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export { Product };
