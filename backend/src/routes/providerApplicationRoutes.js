// backend/src/routes/providerApplicationRoutes.js
const express = require('express');
const { body } = require('express-validator');
const { validateRequest } = require('../middleware/validateRequest');
const ProviderApplication = require('../models/ProviderApplication');
const ServiceProvider = require('../models/ServiceProvider');

const router = express.Router();

router.post('/apply', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('serviceType').notEmpty().withMessage('Service type is required'),
  body('description').notEmpty().withMessage('Service description is required'),
  body('experience').notEmpty().withMessage('Experience is required'),
  body('location').notEmpty().withMessage('Location is required')
], validateRequest, async (req, res) => {
  try {
    const application = new ProviderApplication({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      serviceType: req.body.serviceType,
      description: req.body.description,
      experience: req.body.experience,
      location: req.body.location
    });
    
    const savedApplication = await application.save();
    
    // Auto-approve and create service provider immediately
    const serviceProvider = new ServiceProvider({
      name: savedApplication.name,
      email: savedApplication.email,
      phone: savedApplication.phone,
      serviceType: savedApplication.serviceType.toLowerCase(),
      description: savedApplication.description,
      experience: savedApplication.experience,
      locationName: savedApplication.location,
      applicationId: savedApplication._id,
      location: {
        type: 'Point',
        coordinates: [-74.006 + Math.random() * 0.1, 40.7128 + Math.random() * 0.1]
      }
    });
    
    const savedProvider = await serviceProvider.save();
    
    // Update application status to approved
    savedApplication.status = 'approved';
    savedApplication.reviewedAt = new Date();
    await savedApplication.save();
    
    res.status(201).json({
      message: 'Application submitted and approved successfully! You are now listed as an active service provider.',
      applicationId: savedApplication._id,
      serviceProviderId: savedProvider._id,
      application: savedApplication,
      serviceProvider: savedProvider
    });
  } catch (error) {
    console.error('Error saving provider application:', error);
    res.status(500).json({ 
      message: 'Failed to submit application',
      error: error.message 
    });
  }
});

// Get all applications (admin only in production)
router.get('/applications', async (req, res) => {
  try {
    const applications = await ProviderApplication.find()
      .sort({ submittedAt: -1 });
    res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ 
      message: 'Failed to fetch applications',
      error: error.message 
    });
  }
});

// Approve application and create active service provider
router.post('/approve/:id', async (req, res) => {
  try {
    const application = await ProviderApplication.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    
    if (application.status !== 'pending') {
      return res.status(400).json({ message: 'Application already processed' });
    }
    
    // Create active service provider
    const serviceProvider = new ServiceProvider({
      name: application.name,
      email: application.email,
      phone: application.phone,
      serviceType: application.serviceType.toLowerCase(),
      description: application.description,
      experience: application.experience,
      locationName: application.location,
      applicationId: application._id,
      // Default coordinates - in production, you'd geocode the location
      location: {
        type: 'Point',
        coordinates: [-74.006, 40.7128] // Default to NYC coordinates
      }
    });
    
    const savedProvider = await serviceProvider.save();
    
    // Update application status
    application.status = 'approved';
    application.reviewedAt = new Date();
    await application.save();
    
    res.json({
      message: 'Application approved and service provider created',
      serviceProvider: savedProvider,
      application: application
    });
    
  } catch (error) {
    console.error('Error approving application:', error);
    res.status(500).json({ 
      message: 'Failed to approve application',
      error: error.message 
    });
  }
});

// Auto-approve application (for testing/demo purposes)
router.post('/auto-approve', async (req, res) => {
  try {
    const pendingApplications = await ProviderApplication.find({ status: 'pending' });
    const approvedCount = 0;
    
    for (const application of pendingApplications) {
      // Create active service provider
      const serviceProvider = new ServiceProvider({
        name: application.name,
        email: application.email,
        phone: application.phone,
        serviceType: application.serviceType.toLowerCase(),
        description: application.description,
        experience: application.experience,
        locationName: application.location,
        applicationId: application._id,
        location: {
          type: 'Point',
          coordinates: [-74.006 + Math.random() * 0.1, 40.7128 + Math.random() * 0.1]
        }
      });
      
      await serviceProvider.save();
      
      // Update application status
      application.status = 'approved';
      application.reviewedAt = new Date();
      await application.save();
    }
    
    res.json({
      message: `Auto-approved ${pendingApplications.length} applications`,
      count: pendingApplications.length
    });
    
  } catch (error) {
    console.error('Error auto-approving applications:', error);
    res.status(500).json({ 
      message: 'Failed to auto-approve applications',
      error: error.message 
    });
  }
});

module.exports = router;
