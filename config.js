import mongoose from "mongoose";
import("dotenv").config;

const uri =
  "mongodb+srv://aacedenob:MHUaPDwWAQqglZM7@backend.grmho.mongodb.net/?retryWrites=true&w=majority&appName=BACKEND";
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
