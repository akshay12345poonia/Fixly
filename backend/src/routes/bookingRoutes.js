// backend/src/routes/bookingRoutes.js
const express = require('express');
const Booking = require('../models/Booking');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Create booking (protected route)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { providerId, timeSlot } = req.body;
    
    if (!providerId || !timeSlot) {
      return res.status(400).json({ message: 'Provider ID and time slot are required' });
    }

    const booking = new Booking({
      user: req.user.id,
      serviceProvider: providerId,
      timeSlot: new Date(timeSlot),
      status: 'Pending'
    });
    
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Failed to create booking' });
  }
});

// Update booking status (e.g. accept/reject)
router.put('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['Pending', 'Accepted', 'Rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.status = status;
    await booking.save();
    res.json(booking);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ message: 'Failed to update booking' });
  }
});

// Get all bookings (for admin/proxy)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('serviceProvider');
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
});

module.exports = router;
