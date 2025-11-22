import { body, validationResult } from 'express-validator';

// Middleware to handle the result of the validation checks
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'fail', errors: errors.array() });
  }
  next();
};

// Validation rules for the registration route
export const registerValidationRules = () => [
  body('firstName').trim().notEmpty().withMessage('First name is required.'),
  body('lastName').trim().notEmpty().withMessage('Last name is required.'),
  body('email')
    .isEmail().withMessage('Must be a valid email address.')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.'),
  body('role')
    .optional()
    .isIn(['patient', 'doctor', 'admin']).withMessage('Invalid role specified.'),
];

// Validation rules for the login route
export const loginValidationRules = () => [
  body('email')
    .isEmail().withMessage('Please provide a valid email.')
    .normalizeEmail(),
  body('password').notEmpty().withMessage('Password cannot be empty.'),
];