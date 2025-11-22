import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subject: String,
    content: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    priority: { type: String, enum: ['normal', 'high'], default: 'normal' }
  },
  { timestamps: true }
);

export const Message = mongoose.model('Message', messageSchema);


