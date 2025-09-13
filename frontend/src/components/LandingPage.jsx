import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.svg';
import heroPattern from '../assets/hero-pattern.svg';
import '../styles/hero.css';
import '../assets/hero-realistic-bg.css';

export default function LandingPage() {
  const [searchService, setSearchService] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    if (searchService) searchParams.set('service', searchService);
    if (searchLocation) searchParams.set('location', searchLocation);
    window.location.href = `/search?${searchParams.toString()}`;
  };

  const services = [
    { name: 'Electricians', icon: '⚡', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Plumbers', icon: '🔧', color: 'bg-blue-100 text-blue-800' },
    { name: 'Tutors', icon: '📚', color: 'bg-green-100 text-green-800' },
    { name: 'Cleaners', icon: '🧽', color: 'bg-purple-100 text-purple-800' },
    { name: 'Painters', icon: '🎨', color: 'bg-red-100 text-red-800' },
    { name: 'Handymen', icon: '🔨', color: 'bg-orange-100 text-orange-800' }
  ];

  const features = [
    {
      icon: '✓',
      title: 'Verified Professionals',
      description: 'All providers are background checked and verified'
    },
    {
      icon: '⭐',
      title: 'Rated & Reviewed',
      description: 'Read real reviews from verified customers'
    },
    {
      icon: '📅',
      title: 'Easy Scheduling',
      description: 'Book appointments that fit your schedule'
    },
    {
      icon: '🎧',
      title: '24/7 Support',
      description: 'Get help whenever you need it'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-section hero-photo-bg relative text-white py-20 px-4 overflow-hidden"
      >
        {/* Professional photographic elements */}
        <div className="hero-photo-elements"></div>
        <div className="hero-service-icons"></div>
        <div className="hero-professional-lighting"></div>
        
        {/* Subtle animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white bg-opacity-10 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-white bg-opacity-8 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white bg-opacity-12 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white bg-opacity-6 rounded-full animate-pulse" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Find Local Service<br />
            <span className="gradient-text">
              Providers Near You
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Book electricians, plumbers, tutors, and more with just a few clicks.<br />
            <span className="text-yellow-200 font-medium">Trusted professionals, transparent pricing, guaranteed satisfaction.</span>
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
            <div className="hero-search-form bg-white rounded-2xl p-6 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <label className="block text-gray-700 text-sm font-medium mb-2 text-left">
                    What do you need?
                  </label>
                  <input
                    type="text"
                    placeholder="Electrician, Plumber, Tutor..."
                    value={searchService}
                    onChange={(e) => setSearchService(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <label className="block text-gray-700 text-sm font-medium mb-2 text-left">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Your location"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="hero-search-button w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>🔍</span>
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 px-4" style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)'
      }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600">
              Choose from hundreds of trusted professionals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services/category/${service.name.toLowerCase()}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{service.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Fixly */}
      <section className="py-20 px-4" style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(168, 85, 247, 0.05) 100%)'
      }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Fixly?
            </h2>
            <p className="text-xl text-gray-600">
              We make finding and booking services simple and secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-4" style={{
        background: 'linear-gradient(180deg, rgba(241, 245, 249, 0.8) 0%, rgba(226, 232, 240, 0.9) 50%, rgba(203, 213, 225, 1) 100%)'
      }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from real customers
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "Mike did an excellent job installing new outlets in our kitchen. Very professional, 
                clean work, and reasonable pricing. Will definitely hire again!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JW
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jessica W.</p>
                  <p className="text-gray-600 text-sm">12/07/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
