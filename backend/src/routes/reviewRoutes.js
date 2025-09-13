// backend/src/routes/reviewRoutes.js
const express = require('express');
const Review = require('../models/Review');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
  try {
    const { providerId, bookingId, rating, comment } = req.body;
    
    if (!providerId || !rating) {
      return res.status(400).json({ message: 'Provider ID and rating are required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    const review = new Review({
      user: req.user.id,
      serviceProvider: providerId,
      booking: bookingId,
      rating: parseInt(rating),
      comment: comment || ''
    });
    
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ message: 'Failed to create review' });
  }
});

router.get('/provider/:id', async (req, res) => {
  try {
    const reviews = await Review.find({ serviceProvider: req.params.id })
                                .populate('user', 'name')
                                .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
});

module.exports = router;
