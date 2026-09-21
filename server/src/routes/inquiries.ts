import { Router } from 'express';
import { createInquiry } from '../controllers/inquiryController';
import { inquiryValidation } from '../middleware/validate';
import { formRateLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post('/', formRateLimiter, inquiryValidation, createInquiry);

export default router;
