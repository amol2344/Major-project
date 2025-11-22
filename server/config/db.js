import mongoose from 'mongoose';

export async function connectDB(mongoUri) {
  if (!mongoUri) throw new Error('MONGODB_URI is required');
  mongoose.set('strictQuery', true);
  await mongoose.connect(mongoUri, {
    autoIndex: true
  });
  return mongoose.connection;
}


