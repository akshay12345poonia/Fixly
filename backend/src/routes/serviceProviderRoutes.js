// backend/src/routes/serviceProviderRoutes.js
const express = require('express');
const ServiceProvider = require('../models/ServiceProvider');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const providers = await ServiceProvider.find();
    res.json(providers);
  } catch (error) {
    console.error('Error fetching providers:', error);
    res.status(500).json({ message: 'Failed to fetch providers' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const provider = await ServiceProvider.findById(req.params.id);
    if (!provider) {
      return res.status(404).json({ message: 'Provider not found' });
    }
    res.json(provider);
  } catch (error) {
    console.error('Error fetching provider:', error);
    res.status(500).json({ message: 'Failed to fetch provider' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, serviceType, description, location } = req.body;
    
    if (!name || !serviceType) {
      return res.status(400).json({ message: 'Name and service type are required' });
    }

    const provider = new ServiceProvider({ 
      name, 
      serviceType: serviceType.toLowerCase(), 
      description, 
      location 
    });
    
    await provider.save();
    res.status(201).json(provider);
  } catch (error) {
    console.error('Error creating provider:', error);
    res.status(500).json({ message: 'Failed to create provider' });
  }
});

module.exports = router;
