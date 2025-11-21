import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Workouts', href: '/workouts' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center text-emerald-600 group">
              <Dumbbell className="h-8 w-8 mr-2 group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-xl tracking-tight text-slate-900">FitStart</span>
            </Link>
            <button className="ml-3 px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-full border border-red-200 hover:bg-red-200 transition-colors">
              Enhanced
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`${
                  isActive(link.href) ? 'text-emerald-600 font-bold' : 'text-slate-600 hover:text-emerald-600 font-medium'
                } transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/join"
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                location.pathname === '/join' 
                ? 'bg-emerald-700 text-white'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-md'
              }`}
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-emerald-600 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-3 py-3 rounded-md text-base font-medium bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};