const mongoose = require('mongoose'); // will use later
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

(async () => {
  // Optional: skip DB for week 1 if not set
  if (MONGO_URI) {
    try {
      await mongoose.connect(MONGO_URI);
      console.log('MongoDB connected');
    } catch (err) {
      console.warn('MongoDB not connected (dev ok):', err.message);
    }
  }

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
