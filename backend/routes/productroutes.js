import express from "express";

import {
  getProduct,
  getProductById,
} from "../controllers/productController.js";
import Product from "../models/productModel.js";

const router = express.Router();

router.route("/").get(getProduct);

router.route("/:id").get(getProductById);

export default router;
