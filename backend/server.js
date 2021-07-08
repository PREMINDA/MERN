import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { errorHandler } from "./Middleware/errorMiddleware.js";
import router from "./routes/productroutes.js";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is runing");
});

app.use("/api/products", router);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  );
});
