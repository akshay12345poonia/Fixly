import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'default', variant = 'full' }) {
  const sizeClasses = {
    small: 'text-xl',
    default: 'text-2xl md:text-3xl',
    large: 'text-3xl md:text-4xl'
  };

  const iconSizes = {
    small: 'w-6 h-6',
    default: 'w-8 h-8 md:w-10 md:h-10',
    large: 'w-10 h-10 md:w-12 md:h-12'
  };

  const LogoIcon = () => (
    <div className={`${iconSizes[size]} bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg`}>
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-3/4 h-3/4 text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wrench and Screwdriver crossed */}
        <path 
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.06 1.06a1 1 0 0 0 1.42 0l3.75-3.75a3 3 0 0 0-4.24-4.24l-1.06 1.06a1 1 0 0 0 0 1.42l.71.71-1.42 1.42-.71-.71a1 1 0 0 0-1.42 0L9.7 6.3a1 1 0 0 0 0 1.4l.71.71-1.42 1.42-.71-.71a1 1 0 0 0-1.42 0l-3.75 3.75a3 3 0 0 0 4.24 4.24l1.06-1.06a1 1 0 0 0 0-1.42l-.71-.71 1.42-1.42.71.71a1 1 0 0 0 1.42 0l3.75-3.75z" 
          fill="currentColor"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    </div>
  );

  const LogoText = () => (
    <span className={`${sizeClasses[size]} font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
      Fixly
    </span>
  );

  if (variant === 'icon') {
    return (
      <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
        <LogoIcon />
      </Link>
    );
  }

  return (
    <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
      <LogoIcon />
      <LogoText />
    </Link>
  );
}
