import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/User.js';

export async function requireAuth(req, _res, next) {
  try {
    // 1) Getting token and check if it's there
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return _res.status(401).json({ status: 'fail', message: 'You are not logged in! Please log in to get access.' });
    }

    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return _res.status(401).json({ status: 'fail', message: 'The user belonging to this token no longer exists.' });
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
  } catch (error) {
    return _res.status(401).json({ status: 'fail', message: 'Invalid token. Please log in again.' });
  }
}

// Middleware to restrict access to specific roles
export function requireRole(...roles) {
  return (req, _res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new ApiError(403, 'Forbidden'));
    }
    next();
  };
}

// Alias exports for backward compatibility if needed
export const protect = requireAuth;
export const restrictTo = requireRole;