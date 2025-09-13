// backend/src/config/database.js
const mongoose = require('mongoose');

function connectDB() {
  const uri = process.env.MONGODB_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('DB connection error:', err));
}

module.exports = connectDB;
