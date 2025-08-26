const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

// Basic hardening
app.use(helmet());              // sensible security headers
app.use(cors());                // tighten later with origin whitelist
app.use(express.json({ limit: '100kb' })); // avoid body bloat

// Simple API rate limit (tune per route in future)
const apiLimiter = rateLimit({ windowMs: 60 * 1000, max: 120 });
app.use('/test', apiLimiter);

app.get('/', (_req, res) => {
  res.send('PulseVote API running!');
});

// JSON test endpoint
app.get('/test', (_req, res) => {
  res.json({ status: 'ok', app: 'PulseVote', time: new Date().toISOString() });
});

module.exports = app;
