import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) currentSection = section.getAttribute('id') || 'home';
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-dark-900/90 backdrop-blur-sm shadow-md'
            : 'bg-white/90 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-section py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-mono font-bold text-primary-500 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className={theme === 'dark' ? 'text-white' : 'text-dark-900'}>&lt;</span>
            Shyam
            <span className={theme === 'dark' ? 'text-white' : 'text-dark-900'}>/&gt;</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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

            {/* Theme Toggle for Desktop */}
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

            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-4 pr-2">
            {/* Theme Toggle for Mobile */}
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
            
            {/* Menu Button with improved spacing */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-md ${
                theme === 'dark'
                  ? 'bg-dark-300 hover:bg-dark-200 text-gray-100'
                  : 'bg-gray-100 hover:bg-gray-200 text-dark-900'
              } transition-colors`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Full width and proper spacing */}
      {isOpen && (
        <motion.div
          className={
            theme === 'dark' 
              ? 'md:hidden bg-dark-900/95 backdrop-blur-md w-full'
              : 'md:hidden bg-white/95 backdrop-blur-md w-full'
          }
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-section py-4 px-4"> {/* Added px-4 for horizontal padding */}
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium py-2 transition-all duration-300 hover:text-primary-400 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary-500'
                      : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;