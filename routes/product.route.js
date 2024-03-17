import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductDetails,
  deleteProduct,
  updateProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.post("/product", createProduct);
router.get("/product", getAllProducts);
router.get("/product/:id", getProductDetails);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

export default router;
