import mongoose from "mongoose";
import("dotenv").config;

const uri = "mongodb://localhost:27017/retrofitDB";
//console.log(uri);

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.log("Error em Mongo DB" + error);
    process.exit(1);
  }
};
