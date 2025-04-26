import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/username', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/username', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 bg-dark-900 border-t border-dark-300">
      <div className="container-section py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col">
            <a href="#home" className="text-xl font-mono font-bold text-primary-500 flex items-center">
              <span className="text-white">&lt;</span>
              Ayush
              <span className="text-white">/&gt;</span>
            </a>
            <p className="mt-4 text-gray-400 text-sm max-w-xs">
              Computer Science Engineer, Web Developer, and Cyber Expert creating secure, performant web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-300 text-gray-400 hover:text-white hover:bg-primary-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-dark-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Ayush. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed & Built with 🖤
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;