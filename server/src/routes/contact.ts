import { Router } from 'express';
import { createContact } from '../controllers/contactController';
import { contactValidation } from '../middleware/validate';
import { formRateLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post('/', formRateLimiter, contactValidation, createContact);

export default router;
