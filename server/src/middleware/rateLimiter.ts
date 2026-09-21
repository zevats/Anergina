import rateLimit from 'express-rate-limit';

const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS ?? '900000', 10); // 15 minutes
const max = parseInt(process.env.RATE_LIMIT_MAX ?? '10', 10);

export const formRateLimiter = rateLimit({
  windowMs,
  max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please wait before submitting again.',
  },
  skipSuccessfulRequests: false,
});
