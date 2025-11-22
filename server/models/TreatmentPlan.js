import mongoose from 'mongoose';

const planExerciseSchema = new mongoose.Schema(
  {
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise', required: true },
    frequency: String,
    sets: Number,
    reps: Number,
    duration: String,
    notes: String
  },
  { _id: false }
);

const treatmentPlanSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    diagnosis: String,
    startDate: Date,
    endDate: Date,
    status: { type: String, default: 'Active' },
    exercises: [planExerciseSchema],
    progressNotes: [
      {
        date: Date,
        notes: String,
        nextSteps: String
      }
    ]
  },
  { timestamps: true }
);

export const TreatmentPlan = mongoose.model('TreatmentPlan', treatmentPlanSchema);


