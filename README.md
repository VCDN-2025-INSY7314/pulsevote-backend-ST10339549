# PulseVote Backend

This is the backend for the PulseVote project, built with **Node.js, Express, and MongoDB**.

## Features
- Express API with security middleware (**helmet**, **cors**, **rate limiting**)
- JSON body parsing with size limits
- Endpoints:
  - `GET /` → returns a welcome message
  - `GET /test` → returns a JSON response (status, app, timestamp)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file in the project root:**
   ```
   PORT=5000
   # MONGO_URI=mongodb://localhost:27017/pulsevote   # for later use
   ```

3. **Run in development:**
   ```bash
   npx nodemon server.js
   ```

4. **Visit:**
   - http://localhost:5000/ → welcome message
   - http://localhost:5000/test → JSON response

## Security Hygiene
- Helmet for HTTP headers
- CORS enabled (adjust origins in production)
- Express-rate-limit on `/test` to prevent abuse

## Scripts
- `npm run dev` → start with nodemon
- `npm start` → start normally
- `npm audit` → check vulnerabilities
