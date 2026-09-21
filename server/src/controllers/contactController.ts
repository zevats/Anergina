import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { Contact } from '../models/Contact';
import mongoose from 'mongoose';

export async function createContact(req: Request, res: Response, next: NextFunction): Promise<void> {
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

    const { name, company, email, phone, subject, message } = req.body as {
      name: string;
      company: string;
      email: string;
      phone?: string;
      subject: string;
      message: string;
    };

    const contact = new Contact({
      name,
      company,
      email,
      phone: phone || undefined,
      subject,
      message,
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Your message has been received. We will be in touch shortly.',
    });
  } catch (err) {
    next(err);
  }
}
