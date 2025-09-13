
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Find Electricians', href: '/services/category/electricians' },
        { name: 'Find Plumbers', href: '/services/category/plumbers' },
        { name: 'Find Tutors', href: '/services/category/tutors' },
        { name: 'Find Cleaners', href: '/services/category/cleaners' },
        { name: 'Find Painters', href: '/services/category/painters' },
        { name: 'Find Handymen', href: '/services/category/handymen' }
      ]
    },
    {
      title: 'For Providers',
      links: [
        { name: 'Become a Provider', href: '/become-provider' },
        { name: 'Provider Login', href: '/provider/login' },
        { name: 'Provider Resources', href: '/provider/resources' },
        { name: 'Pricing', href: '/pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Safety', href: '/safety' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo size="default" />
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Connect with trusted local service providers for all your home and business needs. 
              Quality service, verified professionals, guaranteed satisfaction.
            </p>
            
            {/* App Download */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-200">Download Our App</p>
              <div className="flex space-x-3">
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                  <span>📱</span>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                  <span>🤖</span>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-300 text-sm">
                © {currentYear} Fixly. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Made ❤️ Akshay Poonia
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <span>🛡️</span>
              <span>Verified Providers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>💳</span>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>⭐</span>
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🎧</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
