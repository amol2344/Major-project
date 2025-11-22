import { Patient } from '../models/Patient.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const listPatients = asyncHandler(async (_req, res) => {
  const items = await Patient.find().populate('user', 'username email').lean();
  res.json(new ApiResponse(true, { items }));
});

export const getPatient = asyncHandler(async (req, res) => {
  const item = await Patient.findById(req.params.id).populate('user', 'username email').lean();
  res.json(new ApiResponse(true, { item }));
});


