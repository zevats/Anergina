import mongoose from 'mongoose';

export async function connectDB(): Promise<boolean> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('[DB] MONGODB_URI not configured — running without database persistence');
    return false;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500,
    });
    console.log('[DB] MongoDB connected successfully');

    mongoose.connection.on('error', (err) => {
      console.error('[DB] MongoDB runtime error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('[DB] MongoDB disconnected');
    });

    return true;
  } catch (err) {
    console.warn('[DB] MongoDB offline or unreachable (serverSelectionTimeoutMS exceeded).');
    console.warn('[DB] Server will operate in resilient mode — API responds gracefully.');
    return false;
  }
}
