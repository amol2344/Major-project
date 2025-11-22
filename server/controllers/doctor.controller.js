import { Doctor } from '../models/Doctor.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const listDoctors = asyncHandler(async (_req, res) => {
  const items = await Doctor.find().populate('user', 'username email').lean();
  res.json(new ApiResponse(true, { items }));
});


