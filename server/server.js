import 'dotenv/config';
import { createApp } from './config/app.js';
import { connectDB } from './config/db.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  try {
    // Connect to database using your connectDB function
    await connectDB(process.env.MONGODB_URI || process.env.MONGO_URI);
    console.log('DB connection successful!');

    const app = createApp();

    const server = app.listen(PORT, () => {
      console.log(`API running on http://localhost:${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err) => {
      console.log('UNHANDLED REJECTION! 💥 Shutting down...');
      console.log(err.name, err.message);
      server.close(() => {
        process.exit(1);
      });
    });

    // Handle SIGTERM for graceful shutdown
    process.on('SIGTERM', () => {
      console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
      server.close(() => {
        console.log('💥 Process terminated!');
      });
    });

  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
}

bootstrap();