import asyncHandler from "express-async-handler";

import Product from "../models/productModel.js";

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.find({});

  res.json(product);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProduct, getProductById };
