import mongoose from "mongoose";

// const MONGO_URI = 'mongodb+srv://root:root@cluster0.swywd.mongodb.net/';
const MONGO_URI = 'mongodb+srv://amfsa:amf@2024Amf@cluster0.hqpit.mongodb.net/';

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
