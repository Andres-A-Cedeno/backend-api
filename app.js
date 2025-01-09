import express from "express";
import { connectDB } from "./config.js";
import userRoutes from "./Routes/userRoutes.js";

const app = express();

app.use(express.json());
connectDB();

app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
