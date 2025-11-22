import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    age: Number,
    gender: String,
    phone: String,
    address: String,
    medicalHistory: [String],
    currentTherapist: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, default: 'Active' }
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);


