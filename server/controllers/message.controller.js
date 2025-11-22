import { Message } from '../models/Message.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const listMessages = asyncHandler(async (req, res) => {
  const items = await Message.find({ $or: [{ sender: req.user.id }, { receiver: req.user.id }] })
    .sort({ createdAt: -1 })
    .lean();
  res.json(new ApiResponse(true, { items }));
});


