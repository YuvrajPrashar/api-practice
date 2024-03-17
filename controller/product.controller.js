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
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product found",
      product,
    });
  } catch (error) {
    res.status(500).send("Something went wrong while searching");
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(201).json({
      success: true,
      product,
      message: "Products found",
    });
  } catch (error) {
    res.status(401).send(`Cannot find all the products Error: ${error}`);
  }
};

const updateProduct = async (req, res) => {
  try {
    //dont use {id} to destructure
    //use req.params.id not req.params
    const id = req.params.id;
    const updatedProduct = req.body;
    await Product.findByIdAndUpdate(id, updatedProduct, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      message: "product found",
      new_product: updatedProduct,
    });
  } catch (error) {
    res.status(501).send(`Something went wrong Error: ${error}`);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await Product.deleteOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).send(`Error deleting product: ${error.message}`);
  }
};

export {
  createProduct,
  getProductDetails,
  getAllProducts,
  deleteProduct,
  updateProduct,
};
