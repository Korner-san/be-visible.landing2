import React from 'react';
import { Icon } from './ui/Icon';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/90 backdrop-blur-md border-b border-gray-200">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4 text-[#0d141b]">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight">be-visible.ai</h2>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">How it Works</a>
            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Features</a>
            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Pricing</a>
            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Login</a>
          </nav>
          <button className="bg-primary hover:bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-primary/30">
            Get Started
          </button>
        </div>
        
        <div className="md:hidden text-[#0d141b]">
          <Icon name="menu" />
        </div>
      </div>
    </header>
  );
};