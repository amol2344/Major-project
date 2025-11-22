import { Appointment } from '../models/Appointment.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const listAppointments = asyncHandler(async (req, res) => {
  const q = {};
  if (req.user?.role === 'doctor') q.doctor = req.user.id;
  if (req.user?.role === 'patient') q.patient = req.user.id;
  const items = await Appointment.find(q).lean();
  res.json(new ApiResponse(true, { items }));
});


