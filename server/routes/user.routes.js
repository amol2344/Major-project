import { Router } from 'express';
import { requireAuth, requireRole } from '../middleware/auth.js';
import { User } from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

// admin list users
router.get(
  '/',
  requireAuth,
  requireRole('admin'),
  asyncHandler(async (_req, res) => {
    const items = await User.find().select('username email role isActive createdAt').lean();
    res.json({ success: true, data: { items } });
  })
);

export default router;


