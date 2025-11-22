import { Exercise } from '../models/Exercise.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const listExercises = asyncHandler(async (_req, res) => {
  const items = await Exercise.find().lean();
  res.json(new ApiResponse(true, { items }));
});


