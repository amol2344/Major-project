import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: String,
    specialty: String,
    bio: String,
    languages: [String],
    availability: String
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);


