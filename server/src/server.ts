import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './config/database';
import contactRoutes from './routes/contact';
import inquiriesRoutes from './routes/inquiries';

const app = express();
const PORT = parseInt(process.env.PORT ?? '5000', 10);

// ─── Security middleware ─────────────────────────────────────────────────────
app.use(helmet());

const allowedOrigins = (process.env.CORS_ORIGIN ?? 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (server-to-server, curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: Origin ${origin} not allowed`));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: false,
  })
);

// ─── Body parsing ─────────────────────────────────────────────────────────────
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    success: true,
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Anergina API',
  });
});

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/contact', contactRoutes);
app.use('/api/inquiries', inquiriesRoutes);

// ─── 404 ─────────────────────────────────────────────────────────────────────
app.use((_req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ─── Error handler ────────────────────────────────────────────────────────────
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[Server Error]', err.message);
  res.status(500).json({
    success: false,
    message: 'An unexpected error occurred. Please try again later.',
  });
});

// ─── Start ────────────────────────────────────────────────────────────────────
async function start() {
  app.listen(PORT, () => {
    console.log(`[Server] Anergina API running on port ${PORT}`);
  });

  // Connect to DB asynchronously without stalling server listening
  connectDB().catch((err) => {
    console.warn('[DB] Background connection failed:', err);
  });
}

start().catch((err) => {
  console.error('[Server] Failed to start:', err);
  process.exit(1);
});

export default app;
