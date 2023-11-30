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
  console.log("call api", req.params.id);
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error("Product not found");
});

// @desc Filter by using Category and Price
// @route Get /api/products/:filter
//@access public
const getProductByFilter = asyncHandler(async (req, res) => {
  const { category, price } = req.params;

  // Construct a filter object based on the provided parameters
  const filter = {};

  if (category) {
    filter.category = category;
  }

  console.log("filter", filter);

  if (price) {
    // Assuming price is a range (e.g., 0-100)
    const [minPrice, maxPrice] = price.split("-");
    filter.price = { $gte: minPrice, $lte: maxPrice };
  }

  // Use the filter object to query the database
  const products = await Product.find(filter);

  res.json(products);
});

export { getProductById, getProducts, getProductByFilter };
