import mongoose from "mongoose";
import { Product } from "../models/product.model.js";

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      success: true,
      product,
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(400).send("something went wrong");
  }
};

const getProductDetails = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(product.productId);
    res.status(200).json({
      success: true,
      message: "product found",
      product,
    });
  } catch (error) {
    res.send("something went wrong while searching");
  }
};

export { createProduct, getProductDetails };
