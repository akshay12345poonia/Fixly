// backend/src/models/ServiceProvider.js
const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  serviceType: { type: String, required: true },
  description: { type: String, required: true },
  experience: { type: String, required: true },
  locationName: { type: String, required: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] }
  },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  applicationId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'ProviderApplication' 
  },
  approvedAt: { type: Date, default: Date.now },
  approvedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
}, {
  timestamps: true
});

serviceProviderSchema.index({ location: '2dsphere' });
serviceProviderSchema.index({ serviceType: 1 });
serviceProviderSchema.index({ isActive: 1 });

module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);
