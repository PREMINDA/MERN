import express from "express";

import {
  getProduct,
  getProductById,
} from "../controllers/productController.js";
import Product from "../models/productModel.js";

const productRoutes = express.Router();

productRoutes.route("/").get(getProduct);

productRoutes.route("/:id").get(getProductById);

export default productRoutes;
