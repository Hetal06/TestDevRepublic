import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../modals/productModal.js";

// @desc Fetch All Product
// @route Get /api/products
//@access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch a single Product
// @route Get /api/products/:id
//@access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error("Product not found");
});

export { getProductById, getProducts };
