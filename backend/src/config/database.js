// backend/src/config/database.js
const mongoose = require('mongoose');

function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fixly';
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('DB connection error:', err));
}

module.exports = connectDB;
