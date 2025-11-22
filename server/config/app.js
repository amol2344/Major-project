import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import { errorHandler, notFound } from '../middleware/error.js';
import authRoutes from '../routes/auth.routes.js';

// Import only the routes that actually exist
export function createApp() {
  const app = express();

  // --- Global Security Middleware ---

  // 1) Set security HTTP headers
  app.use(helmet());

  // 2) Development logging
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  // 3) CORS Configuration
  const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));

  // 4) General Rate Limiting
  const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100, // Limit each IP to 100 requests per window
    message: 'Too many requests from this IP, please try again in an hour!',
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use('/api', limiter); // Apply to all routes starting with /api

  // 5) Stricter rate limit for authentication
  const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 auth attempts per 15 mins
    message: 'Too many authentication attempts, please try again after 15 minutes.',
  });
  app.use('/api/auth', authLimiter);

  // 6) Body parser, reading data from body into req.body
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));

  // 7) Data sanitization against NoSQL query injection
  app.use(mongoSanitize());

  // 8) Data sanitization against XSS
  app.use(xss());

  // 9) Prevent parameter pollution
  app.use(hpp());

  // Health check endpoint
  app.get('/health', (_req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

  // API status endpoint
  app.get('/api/status', (_req, res) => res.json({ 
    status: 'success', 
    message: 'API is running',
    version: '1.0.0'
  }));
require("dotenv").config();


var http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

  // Routes - only add routes that exist
  app.use('/api/auth', authRoutes);
  
  // Add other routes only if they exist and are properly exported
  // app.use('/api/users', userRoutes);
  // app.use('/api/patients', patientRoutes);
  // app.use('/api/doctors', doctorRoutes);
  // app.use('/api/appointments', appointmentRoutes);
  // app.use('/api/exercises', exerciseRoutes);
  // app.use('/api/treatments', treatmentRoutes);
  // app.use('/api/messages', messageRoutes);

  // Error handling middleware
  app.use(notFound);
  app.use(errorHandler);
app.use('/',paymentRoute);
  return app;
}