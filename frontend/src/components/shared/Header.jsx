
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-lg border-b border-indigo-100/50 backdrop-blur-sm" style={{
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.95) 0%, rgba(139, 92, 246, 0.95) 50%, rgba(168, 85, 247, 0.95) 100%)'
    }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo size="default" />

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/90 hover:text-white transition-colors font-medium">
              Find Services
            </Link>
            <Link to="/become-provider" className="text-white/90 hover:text-white transition-colors font-medium">
              Become a Provider
            </Link>
            <Link to="/help" className="text-white/90 hover:text-white transition-colors font-medium">
              Help
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link 
              to="/register" 
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-all backdrop-blur-sm border border-white/20"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white/90 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
