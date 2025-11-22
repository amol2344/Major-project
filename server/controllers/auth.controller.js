import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    data: {
      token,
      user: { 
        id: user._id, 
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username, 
        email: user.email, 
        role: user.role 
      }
    }
  });
};

// Use named exports instead of default export
export const register = asyncHandler(async (req, res, next) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    createSendToken(newUser, 201, res);
  } catch (error) {
    next(error);
  }
});

export const login = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({ 
        status: 'fail', 
        message: 'Incorrect email or password.' 
      });
    }

    // 3) If everything ok, send token to client
    createSendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
});

// Optional: Add logout functionality if needed
export const logout = asyncHandler(async (req, res, next) => {
  // For JWT, logout is typically handled on the client side by removing the token
  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully.'
  });
});