import mongoose from "mongoose";

// 👇 ADD THIS LINE HERE (TEMPORARY)
console.log("ENV CHECK =>", JSON.stringify(process.env.MONGODB_URL));

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("❌ MONGODB_URL is not defined");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnection() {
  if (cached.conn) {
    console.log("✓ Database already connected");
    return cached.conn;
  }

  try {

    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URL, {
        bufferCommands: false,
      });
    }

    cached.conn = await cached.promise;
    console.log("✓ Database connection successful");
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("✗ Database connection failed:", error.message);
    throw error;
  }
}

export default dbConnection;
