import { TreatmentPlan } from '../models/TreatmentPlan.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const listPlans = asyncHandler(async (req, res) => {
  const q = {};
  if (req.query.patient) q.patient = req.query.patient;
  if (req.query.doctor) q.doctor = req.query.doctor;
  const items = await TreatmentPlan.find(q).lean();
  res.json(new ApiResponse(true, { items }));
});


