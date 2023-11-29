import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/productRoutes.js";
import cookieParser from "cookie-parser";
import UserRoutes from "./routes/userRouters.js";

import { notFound, errorHandler } from "./middleware/errorHandler.js";
dotenv.config();

connectDB(); //connext to mongodb
const port = process.env.PORT;

const app = express();

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Api is running....");
});

app.use("/api/products", ProductRoutes);
app.use("/api/users", UserRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log("server is running...."));
