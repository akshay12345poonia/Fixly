// Simple script to populate database with service providers
const mongoose = require('mongoose');

// Service Provider Schema (inline for simplicity)
const serviceProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  serviceType: { type: String, required: true },
  description: { type: String },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] }
  }
});

const ServiceProvider = mongoose.model('ServiceProvider', serviceProviderSchema);

const sampleProviders = [
  // Electricians (8 providers)
  {
    name: "Mike's Electrical Services",
    serviceType: "electricians",
    description: "Professional electrical installations and repairs. 15+ years experience.",
    location: { type: "Point", coordinates: [-74.006, 40.7128] }
  },
  {
    name: "Elite Electrical Co.",
    serviceType: "electricians", 
    description: "Commercial and residential electrical work. Smart home installations.",
    location: { type: "Point", coordinates: [-74.0054, 40.7122] }
  },
  {
    name: "PowerUp Electric",
    serviceType: "electricians",
    description: "Licensed electricians specializing in home automation and LED installations.",
    location: { type: "Point", coordinates: [-74.0061, 40.7129] }
  },
  {
    name: "Lightning Fast Electric",
    serviceType: "electricians",
    description: "Emergency electrical services. Panel upgrades and circuit installations.",
    location: { type: "Point", coordinates: [-74.0073, 40.7141] }
  },
  {
    name: "Bright Spark Electrical",
    serviceType: "electricians",
    description: "Solar panel installations and energy-efficient lighting solutions.",
    location: { type: "Point", coordinates: [-74.0074, 40.7142] }
  },
  {
    name: "Current Solutions LLC",
    serviceType: "electricians",
    description: "Industrial and commercial electrical contractor. 24/7 emergency service.",
    location: { type: "Point", coordinates: [-74.0075, 40.7143] }
  },
  {
    name: "Volt Masters Electric",
    serviceType: "electricians",
    description: "Certified electricians for rewiring, outlets, and electrical troubleshooting.",
    location: { type: "Point", coordinates: [-74.0076, 40.7144] }
  },
  {
    name: "Ampere Electric Services",
    serviceType: "electricians",
    description: "Residential electrical repairs, ceiling fans, and outdoor lighting installation.",
    location: { type: "Point", coordinates: [-74.0077, 40.7145] }
  },
  
  // Plumbers (8 providers)
  {
    name: "Quick Fix Plumbing",
    serviceType: "plumbers",
    description: "Emergency plumbing services available 24/7. Licensed and insured.",
    location: { type: "Point", coordinates: [-74.0059, 40.7127] }
  },
  {
    name: "Reliable Plumbing Pro", 
    serviceType: "plumbers",
    description: "Drain cleaning, pipe repair, and bathroom renovations.",
    location: { type: "Point", coordinates: [-74.0053, 40.7121] }
  },
  {
    name: "AquaFlow Plumbing",
    serviceType: "plumbers",
    description: "Water heater installation, leak detection, and pipe replacement services.",
    location: { type: "Point", coordinates: [-74.0062, 40.7130] }
  },
  {
    name: "Pipe Dreams Plumbing",
    serviceType: "plumbers",
    description: "Kitchen and bathroom remodeling. Sewer line repair and replacement.",
    location: { type: "Point", coordinates: [-74.0078, 40.7146] }
  },
  {
    name: "H2O Heroes Plumbing",
    serviceType: "plumbers",
    description: "Water filtration systems, garbage disposal installation, and leak repairs.",
    location: { type: "Point", coordinates: [-74.0079, 40.7147] }
  },
  {
    name: "FlowMaster Plumbing",
    serviceType: "plumbers",
    description: "Hydro-jetting, camera inspections, and trenchless pipe repair.",
    location: { type: "Point", coordinates: [-74.0080, 40.7148] }
  },
  {
    name: "Blue Water Plumbing",
    serviceType: "plumbers",
    description: "Tankless water heaters, backflow prevention, and gas line installation.",
    location: { type: "Point", coordinates: [-74.0081, 40.7149] }
  },
  {
    name: "Drip Stop Plumbing",
    serviceType: "plumbers",
    description: "Faucet repair, toilet installation, and shower/tub replacement services.",
    location: { type: "Point", coordinates: [-74.0082, 40.7150] }
  },

  // Tutors (12 providers)
  {
    name: "Sarah's Math Tutoring",
    serviceType: "tutors",
    description: "Expert math tutor for grades K-12 and college prep. Online and in-person sessions.",
    location: { type: "Point", coordinates: [-74.0058, 40.7126] }
  },
  {
    name: "Academic Excellence Tutoring",
    serviceType: "tutors",
    description: "Comprehensive tutoring in Math, Science, and English. SAT/ACT prep available.",
    location: { type: "Point", coordinates: [-74.0063, 40.7131] }
  },
  {
    name: "Dr. Johnson's Science Tutoring",
    serviceType: "tutors",
    description: "PhD in Chemistry offering tutoring in all sciences. University level expertise.",
    location: { type: "Point", coordinates: [-74.0064, 40.7132] }
  },
  {
    name: "Language Learning Center",
    serviceType: "tutors",
    description: "Native speakers offering tutoring in Spanish, French, and Mandarin.",
    location: { type: "Point", coordinates: [-74.0065, 40.7133] }
  },
  {
    name: "Tech Skills Academy",
    serviceType: "tutors",
    description: "Programming, web development, and computer science tutoring for all ages.",
    location: { type: "Point", coordinates: [-74.0066, 40.7134] }
  },
  {
    name: "Bright Minds Tutoring",
    serviceType: "tutors",
    description: "Special needs tutoring and learning disability support. Patient and experienced.",
    location: { type: "Point", coordinates: [-74.0083, 40.7151] }
  },
  {
    name: "College Prep Masters",
    serviceType: "tutors",
    description: "SAT, ACT, GRE, and GMAT test preparation. College application essay help.",
    location: { type: "Point", coordinates: [-74.0084, 40.7152] }
  },
  {
    name: "Music & Arts Tutoring",
    serviceType: "tutors",
    description: "Piano, guitar, violin lessons. Art and creative writing instruction.",
    location: { type: "Point", coordinates: [-74.0085, 40.7153] }
  },
  {
    name: "STEM Success Tutoring",
    serviceType: "tutors",
    description: "Advanced physics, calculus, and engineering tutoring for high school and college.",
    location: { type: "Point", coordinates: [-74.0086, 40.7154] }
  },
  {
    name: "Reading & Writing Workshop",
    serviceType: "tutors",
    description: "English literature, creative writing, and reading comprehension for all ages.",
    location: { type: "Point", coordinates: [-74.0087, 40.7155] }
  },
  {
    name: "Business & Finance Tutoring",
    serviceType: "tutors",
    description: "Accounting, economics, business studies, and financial literacy tutoring.",
    location: { type: "Point", coordinates: [-74.0088, 40.7156] }
  },
  {
    name: "Elementary Learning Hub",
    serviceType: "tutors",
    description: "K-5 all subjects tutoring. Homework help and study skills development.",
    location: { type: "Point", coordinates: [-74.0089, 40.7157] }
  },

  // Cleaners (8 providers)
  {
    name: "Sparkle Clean Services",
    serviceType: "cleaners",
    description: "Residential and commercial cleaning services. Eco-friendly products used.",
    location: { type: "Point", coordinates: [-74.0057, 40.7125] }
  },
  {
    name: "Crystal Clear Cleaning",
    serviceType: "cleaners",
    description: "Deep cleaning, move-in/out cleaning, and regular maintenance cleaning.",
    location: { type: "Point", coordinates: [-74.0067, 40.7135] }
  },
  {
    name: "Green Clean Solutions",
    serviceType: "cleaners",
    description: "100% organic cleaning products. Pet and child-safe cleaning services.",
    location: { type: "Point", coordinates: [-74.0068, 40.7136] }
  },
  {
    name: "Maid to Perfection",
    serviceType: "cleaners",
    description: "Weekly, bi-weekly, and monthly house cleaning. Post-construction cleanup.",
    location: { type: "Point", coordinates: [-74.0090, 40.7158] }
  },
  {
    name: "Spotless Home Cleaning",
    serviceType: "cleaners",
    description: "Carpet cleaning, window washing, and pressure washing services.",
    location: { type: "Point", coordinates: [-74.0091, 40.7159] }
  },
  {
    name: "Fresh Start Cleaning Co.",
    serviceType: "cleaners",
    description: "Office cleaning, medical facility sanitization, and janitorial services.",
    location: { type: "Point", coordinates: [-74.0092, 40.7160] }
  },
  {
    name: "Shine Bright Cleaning",
    serviceType: "cleaners",
    description: "Apartment cleaning, Airbnb turnover cleaning, and organizing services.",
    location: { type: "Point", coordinates: [-74.0093, 40.7161] }
  },
  {
    name: "Pure Clean Professionals",
    serviceType: "cleaners",
    description: "Disinfection services, COVID-19 sanitization, and hospital-grade cleaning.",
    location: { type: "Point", coordinates: [-74.0094, 40.7162] }
  },

  // Painters (8 providers)
  {
    name: "Pro Paint Solutions",
    serviceType: "painters",
    description: "Interior and exterior painting. Free estimates and color consultation.",
    location: { type: "Point", coordinates: [-74.0056, 40.7124] }
  },
  {
    name: "Artistic Touch Painters",
    serviceType: "painters",
    description: "Premium painting services with decorative finishes and wallpaper installation.",
    location: { type: "Point", coordinates: [-74.0069, 40.7137] }
  },
  {
    name: "Budget Paint Pros",
    serviceType: "painters",
    description: "Affordable painting services without compromising quality. Same-day quotes.",
    location: { type: "Point", coordinates: [-74.0070, 40.7138] }
  },
  {
    name: "Rainbow Painters LLC",
    serviceType: "painters",
    description: "Commercial painting, industrial coatings, and warehouse floor painting.",
    location: { type: "Point", coordinates: [-74.0095, 40.7163] }
  },
  {
    name: "Precision Paint Works",
    serviceType: "painters",
    description: "Cabinet refinishing, furniture painting, and custom murals.",
    location: { type: "Point", coordinates: [-74.0096, 40.7164] }
  },
  {
    name: "Color Masters Painting",
    serviceType: "painters",
    description: "Drywall repair, texture matching, and popcorn ceiling removal.",
    location: { type: "Point", coordinates: [-74.0097, 40.7165] }
  },
  {
    name: "Brush & Roll Painters",
    serviceType: "painters",
    description: "Residential repainting, deck staining, and fence painting services.",
    location: { type: "Point", coordinates: [-74.0098, 40.7166] }
  },
  {
    name: "Elite Paint Contractors",
    serviceType: "painters",
    description: "High-end residential painting, luxury home finishes, and designer colors.",
    location: { type: "Point", coordinates: [-74.0099, 40.7167] }
  },

  // Handymen (8 providers)
  {
    name: "Fix-It-All Handyman",
    serviceType: "handymen",
    description: "General home repairs and maintenance. No job too small!",
    location: { type: "Point", coordinates: [-74.0055, 40.7123] }
  },
  {
    name: "Home Helper Services",
    serviceType: "handymen",
    description: "Furniture assembly, TV mounting, shelf installation, and minor repairs.",
    location: { type: "Point", coordinates: [-74.0071, 40.7139] }
  },
  {
    name: "Skilled Hands Repair",
    serviceType: "handymen",
    description: "Experienced handyman for carpentry, drywall repair, and home improvements.",
    location: { type: "Point", coordinates: [-74.0072, 40.7140] }
  },
  {
    name: "Handy Andy Services",
    serviceType: "handymen",
    description: "Door and window installation, trim work, and bathroom fixture replacement.",
    location: { type: "Point", coordinates: [-74.0100, 40.7168] }
  },
  {
    name: "Mr. Fix-It Solutions",
    serviceType: "handymen",
    description: "Tile repair, caulking, weatherproofing, and gutter cleaning services.",
    location: { type: "Point", coordinates: [-74.0101, 40.7169] }
  },
  {
    name: "Tool Time Handyman",
    serviceType: "handymen",
    description: "Deck repair, fence installation, and outdoor home maintenance.",
    location: { type: "Point", coordinates: [-74.0102, 40.7170] }
  },
  {
    name: "Quick Fix Handyman",
    serviceType: "handymen",
    description: "Same-day repairs, emergency fixes, and property maintenance services.",
    location: { type: "Point", coordinates: [-74.0103, 40.7171] }
  },
  {
    name: "Complete Home Solutions",
    serviceType: "handymen",
    description: "Kitchen and bathroom remodeling, flooring installation, and custom carpentry.",
    location: { type: "Point", coordinates: [-74.0104, 40.7172] }
  }
];

async function populateDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/fixly');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await ServiceProvider.deleteMany({});
    console.log('🗑️  Cleared existing service providers');

    // Insert sample data
    const result = await ServiceProvider.insertMany(sampleProviders);
    console.log(`✅ Added ${result.length} service providers successfully!`);
    
    // Verify data
    const count = await ServiceProvider.countDocuments();
    console.log(`📊 Total providers in database: ${count}`);
    
    // Show breakdown by service type
    const electricians = await ServiceProvider.countDocuments({ serviceType: 'electricians' });
    const plumbers = await ServiceProvider.countDocuments({ serviceType: 'plumbers' });
    const tutors = await ServiceProvider.countDocuments({ serviceType: 'tutors' });
    const cleaners = await ServiceProvider.countDocuments({ serviceType: 'cleaners' });
    const painters = await ServiceProvider.countDocuments({ serviceType: 'painters' });
    const handymen = await ServiceProvider.countDocuments({ serviceType: 'handymen' });
    
    console.log('\n📋 Service Provider Breakdown:');
    console.log(`   Electricians: ${electricians}`);
    console.log(`   Plumbers: ${plumbers}`);
    console.log(`   Tutors: ${tutors}`);
    console.log(`   Cleaners: ${cleaners}`);
    console.log(`   Painters: ${painters}`);
    console.log(`   Handymen: ${handymen}`);

    // Close connection
    await mongoose.connection.close();
    console.log('✅ Database connection closed');
    
  } catch (error) {
    console.error('❌ Error populating database:', error);
    process.exit(1);
  }
}

populateDatabase();
