
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/auth/providers', require('./routes/serviceProviderRoutes'));
app.use('/auth/provider-applications', require('./routes/providerApplicationRoutes'));
app.use('/auth/bookings', require('./routes/bookingRoutes'));
app.use('/auth/reviews', require('./routes/reviewRoutes'));

// Health check route
app.get('/health', (req, res) => {
  res.json({ message: 'Fixly API is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
