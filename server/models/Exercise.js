import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    category: String,
    difficulty: String,
    duration: String,
    videoUrl: String
  },
  { timestamps: true }
);

export const Exercise = mongoose.model('Exercise', exerciseSchema);


