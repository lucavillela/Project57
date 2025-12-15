import mongoose from "mongoose";

// Esta é a interface que garante a segurança do global
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Por favor, defina a variável de ambiente MONGODB_URI dentro do .env.local"
  );
}

const DB_CONNECT_URI: string = MONGODB_URI; //garante que DB_CONNECT_URI é de fato uma string

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null } as MongooseCache;
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DB_CONNECT_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
