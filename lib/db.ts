// lib/db.ts
import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Extend global type to include a mongoose cache
declare global {
    // eslint-disable-next-line no-var
    var mongooseCache: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
    };
}

let cached = globalThis.mongooseCache;

if (!cached) {
    cached = globalThis.mongooseCache = { conn: null, promise: null };
}

export async function connectToDB(): Promise<Mongoose> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts);
    }

    try {
        cached.conn = await cached.promise;
        console.log('✅ Database connected');
    } catch (err) {
        cached.promise = null;
        console.error('❌ Database connection failed:', err);
        throw err;
    }

    return cached.conn;
}
