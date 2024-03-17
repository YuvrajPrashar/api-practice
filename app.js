import express, { urlencoded } from "express";
import {
  createProduct,
  getProductDetails,
} from "./controller/product.controller.js";

const app = express();

app.use(express.json());
app.post("/product", createProduct);
app.get("/product:id", getProductDetails);
export { app };
