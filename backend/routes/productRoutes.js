import express from "express";
import {
  getProductByFilter,
  getProductById,
  getProducts,
} from "../controller/productController.js";

const router = express.Router();

// Place the filter route before the ID route
router.route("/filter/:category?/:price?").get(getProductByFilter);
router.route("/:id").get(getProductById);
router.route("/").get(getProducts);

export default router;
