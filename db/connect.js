import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const url = process.env.MONGO_URI

export const connectDb = async () => {
    return mongoose.connect(url)
}

