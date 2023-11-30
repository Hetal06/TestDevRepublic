import express from "express";
const router = express.Router();

import {
  addOrderItems,
  getMyOrders,
  getOrderById,
} from "../controller/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);

export default router;
