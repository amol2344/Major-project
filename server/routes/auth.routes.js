import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import {
  registerValidationRules,
  loginValidationRules,
  handleValidationErrors,
} from '../middleware/validators.js';

const router = express.Router();

// The validation rules run first, then handleValidationErrors checks the result.
// If validation passes, authController.register is called.
router.post(
  '/register',
  registerValidationRules(),
  handleValidationErrors,
  authController.register
);

router.post(
  '/login',
  loginValidationRules(),
  handleValidationErrors,
  authController.login
);

// Add logout route if needed
router.post('/logout', authController.logout);

export default router;