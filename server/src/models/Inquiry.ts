import mongoose, { Document, Schema } from 'mongoose';

const INQUIRY_TYPES = [
  'insurance-partnership',
  'workshop-partnership',
  'technology-partnership',
  'business-inquiry',
  'other',
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

export interface IInquiry extends Document {
  name: string;
  organization: string;
  email: string;
  phone?: string;
  inquiryType: InquiryType;
  message: string;
  createdAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    organization: {
      type: String,
      required: [true, 'Organization is required'],
      trim: true,
      maxlength: [150, 'Organization name cannot exceed 150 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    phone: {
      type: String,
      trim: true,
      maxlength: [20, 'Phone number cannot exceed 20 characters'],
    },
    inquiryType: {
      type: String,
      required: [true, 'Inquiry type is required'],
      enum: {
        values: INQUIRY_TYPES,
        message: 'Invalid inquiry type',
      },
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [5000, 'Message cannot exceed 5000 characters'],
    },
  },
  {
    timestamps: true,
  }
);

export const Inquiry = mongoose.model<IInquiry>('Inquiry', InquirySchema);
