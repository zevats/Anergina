import { body } from 'express-validator';

export const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .escape(),

  body('company')
    .trim()
    .notEmpty()
    .withMessage('Company is required')
    .isLength({ max: 150 })
    .withMessage('Company name cannot exceed 150 characters')
    .escape(),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('phone')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 20 })
    .withMessage('Phone number cannot exceed 20 characters')
    .matches(/^[+\d\s\-()]{0,20}$/)
    .withMessage('Invalid phone number format')
    .escape(),

  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ max: 200 })
    .withMessage('Subject cannot exceed 200 characters')
    .escape(),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 5000 })
    .withMessage('Message must be between 10 and 5000 characters')
    .escape(),
];

export const inquiryValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .escape(),

  body('organization')
    .trim()
    .notEmpty()
    .withMessage('Organization/Company is required')
    .isLength({ max: 150 })
    .withMessage('Organization name cannot exceed 150 characters')
    .escape(),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('phone')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 20 })
    .withMessage('Phone number cannot exceed 20 characters')
    .matches(/^[+\d\s\-()]{0,20}$/)
    .withMessage('Invalid phone number format')
    .escape(),

  body('inquiryType')
    .trim()
    .notEmpty()
    .withMessage('Please select an inquiry type')
    .isIn([
      'insurance-partnership',
      'workshop-partnership',
      'technology-partnership',
      'business-inquiry',
      'other',
    ])
    .withMessage('Invalid inquiry type'),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 5000 })
    .withMessage('Message must be between 10 and 5000 characters')
    .escape(),
];
