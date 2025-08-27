const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json({ limit: '100kb' }));

// Allow your Vite frontend over HTTPS
app.use(cors({
  origin: "https://localhost:5173",
  credentials: false
}));

app.get('/', (_req, res) => res.send('PulseVote API running!'));
app.get('/test', (_req, res) => res.json({ status: 'ok', app: 'PulseVote', time: new Date().toISOString() }));

// Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Protected sample
const { protect } = require("./middleware/authMiddleware");
app.get("/api/protected", protect, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}!`, timestamp: new Date() });
});

module.exports = app;
