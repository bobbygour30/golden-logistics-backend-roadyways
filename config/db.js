import mongoose from "mongoose";

let cached = global._mongoose || (global._mongoose = { conn: null, promise: null });

const connectDB = async () => {
  if (cached.conn) return cached.conn;
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI not defined");
  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI).then((m) => m);
  }
  try {
    cached.conn = await cached.promise;
    console.log("✅ MongoDB Connected (Atlas)");
  } catch (err) {
    cached.promise = null;
    console.error("❌ DB Connection Failed:", err.message);
    throw err;
  }
  return cached.conn;
};

export default connectDB;
