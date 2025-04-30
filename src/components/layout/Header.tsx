import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  // ... existing state and logic

  return (
    <motion.header
      // ... existing header props
    >
      <div className="container-section py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-mono font-bold text-primary-500 flex items-center z-50"
            whileHover={{ scale: 1.05 }}
          >
            {/* ... logo content */}
          </motion.a>

          {/* Desktop Navigation - Centered */}
          <div className="flex-1 hidden md:flex justify-center">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary-400 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary-500'
                      : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Section (Buttons) */}
          <div className="flex items-center gap-4">
            {/* Desktop Contact Button */}
            <a
              href="#contact"
              className="btn-primary hidden md:inline-flex"
            >
              Contact Me
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-dark-300 hover:bg-dark-200'
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md md:hidden ${
                theme === 'dark'
                  ? 'bg-dark-300 hover:bg-dark-200'
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ... rest of the mobile menu code */}
    </motion.header>
  );
};

export default Header;