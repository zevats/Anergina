import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { Inquiry } from '../models/Inquiry';
import mongoose from 'mongoose';

export async function createInquiry(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
      return;
    }

    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      res.status(503).json({
        success: false,
        message: 'Service temporarily unavailable. Please try again later.',
      });
      return;
    }

    const { name, organization, email, phone, inquiryType, message } = req.body as {
      name: string;
      organization: string;
      email: string;
      phone?: string;
      inquiryType: string;
      message: string;
    };

    const inquiry = new Inquiry({
      name,
      organization,
      email,
      phone: phone || undefined,
      inquiryType,
      message,
    });

    await inquiry.save();

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been received. We will be in touch shortly.',
    });
  } catch (err) {
    next(err);
  }
}
