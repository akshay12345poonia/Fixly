// backend/src/scripts/seedData.js
const mongoose = require('mongoose');
require('dotenv').config();
const ServiceProvider = require('../models/ServiceProvider');

const sampleProviders = [
  // Electricians
  {
    name: "Mike's Electrical Services",
    serviceType: "electricians",
    description: "Professional electrical installations and repairs. 15+ years experience.",
    location: {
      type: "Point",
      coordinates: [-74.006, 40.7128]
    }
  },
  {
    name: "Elite Electrical Co.",
    serviceType: "electricians",
    description: "Commercial and residential electrical work. Smart home installations.",
    location: {
      type: "Point",
      coordinates: [-74.0054, 40.7122]
    }
  },
  {
    name: "PowerUp Electric",
    serviceType: "electricians",
    description: "Licensed electricians specializing in home automation and LED installations.",
    location: {
      type: "Point",
      coordinates: [-74.0061, 40.7129]
    }
  },
  
  // Plumbers
  {
    name: "Quick Fix Plumbing",
    serviceType: "plumbers", 
    description: "Emergency plumbing services available 24/7. Licensed and insured.",
    location: {
      type: "Point",
      coordinates: [-74.0059, 40.7127]
    }
  },
  {
    name: "Reliable Plumbing Pro",
    serviceType: "plumbers",
    description: "Drain cleaning, pipe repair, and bathroom renovations.",
    location: {
      type: "Point",
      coordinates: [-74.0053, 40.7121]
    }
  },
  {
    name: "AquaFlow Plumbing",
    serviceType: "plumbers",
    description: "Water heater installation, leak detection, and pipe replacement services.",
    location: {
      type: "Point",
      coordinates: [-74.0062, 40.7130]
    }
  },

  // Tutors
  {
    name: "Sarah's Math Tutoring",
    serviceType: "tutors",
    description: "Expert math tutor for grades K-12 and college prep. Online and in-person sessions.",
    location: {
      type: "Point",
      coordinates: [-74.0058, 40.7126]
    }
  },
  {
    name: "Academic Excellence Tutoring",
    serviceType: "tutors",
    description: "Comprehensive tutoring in Math, Science, and English. SAT/ACT prep available.",
    location: {
      type: "Point",
      coordinates: [-74.0063, 40.7131]
    }
  },
  {
    name: "Dr. Johnson's Science Tutoring",
    serviceType: "tutors",
    description: "PhD in Chemistry offering tutoring in all sciences. University level expertise.",
    location: {
      type: "Point",
      coordinates: [-74.0064, 40.7132]
    }
  },
  {
    name: "Language Learning Center",
    serviceType: "tutors",
    description: "Native speakers offering tutoring in Spanish, French, and Mandarin.",
    location: {
      type: "Point",
      coordinates: [-74.0065, 40.7133]
    }
  },
  {
    name: "Tech Skills Academy",
    serviceType: "tutors",
    description: "Programming, web development, and computer science tutoring for all ages.",
    location: {
      type: "Point",
      coordinates: [-74.0066, 40.7134]
    }
  },

  // Cleaners
  {
    name: "Sparkle Clean Services",
    serviceType: "cleaners",
    description: "Residential and commercial cleaning services. Eco-friendly products used.",
    location: {
      type: "Point",
      coordinates: [-74.0057, 40.7125]
    }
  },
  {
    name: "Crystal Clear Cleaning",
    serviceType: "cleaners",
    description: "Deep cleaning, move-in/out cleaning, and regular maintenance cleaning.",
    location: {
      type: "Point",
      coordinates: [-74.0067, 40.7135]
    }
  },
  {
    name: "Green Clean Solutions",
    serviceType: "cleaners",
    description: "100% organic cleaning products. Pet and child-safe cleaning services.",
    location: {
      type: "Point",
      coordinates: [-74.0068, 40.7136]
    }
  },

  // Painters
  {
    name: "Pro Paint Solutions",
    serviceType: "painters",
    description: "Interior and exterior painting. Free estimates and color consultation.",
    location: {
      type: "Point",
      coordinates: [-74.0056, 40.7124]
    }
  },
  {
    name: "Artistic Touch Painters",
    serviceType: "painters",
    description: "Premium painting services with decorative finishes and wallpaper installation.",
    location: {
      type: "Point",
      coordinates: [-74.0069, 40.7137]
    }
  },
  {
    name: "Budget Paint Pros",
    serviceType: "painters",
    description: "Affordable painting services without compromising quality. Same-day quotes.",
    location: {
      type: "Point",
      coordinates: [-74.0070, 40.7138]
    }
  },

  // Handymen
  {
    name: "Fix-It-All Handyman",
    serviceType: "handymen",
    description: "General home repairs and maintenance. No job too small!",
    location: {
      type: "Point",
      coordinates: [-74.0055, 40.7123]
    }
  },
  {
    name: "Home Helper Services",
    serviceType: "handymen",
    description: "Furniture assembly, TV mounting, shelf installation, and minor repairs.",
    location: {
      type: "Point",
      coordinates: [-74.0071, 40.7139]
    }
  },
  {
    name: "Skilled Hands Repair",
    serviceType: "handymen",
    description: "Experienced handyman for carpentry, drywall repair, and home improvements.",
    location: {
      type: "Point",
      coordinates: [-74.0072, 40.7140]
    }
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fixly';
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // Clear existing data
    await ServiceProvider.deleteMany({});
    console.log('Cleared existing service providers');

    // Insert sample data
    await ServiceProvider.insertMany(sampleProviders);
    console.log('Sample service providers added successfully!');

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
