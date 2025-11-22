import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    date: { type: Date, required: true },
    duration: { type: Number, default: 60 },
    type: { type: String, enum: ['consultation', 'therapy', 'initial', 'follow-up'], default: 'consultation' },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled', 'completed'], default: 'pending' },
    notes: String,
    location: String
  },
  { timestamps: true }
);

export const Appointment = mongoose.model('Appointment', appointmentSchema);


