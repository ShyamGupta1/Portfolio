import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-section z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="block">Hi, I'm </span>
              <span className="gradient-text">Ayush</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 font-medium h-16 mb-6">
              <TypeAnimation
                sequence={[
                  'Computer Science Engineer',
                  1000,
                  'Web Developer',
                  1000,
                  'Cloud Engineer',
                  1000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
              />
            </div>
            
            <p className="text-gray-400 text-lg max-w-lg mb-8">
              Passionate about creating secure, performant web experiences and solving complex problems through elegant code solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight size={18} />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                Download CV
                <Download size={18} />
              </motion.a>
              
              <div className="flex gap-3 mt-2">
                <motion.a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-300 text-gray-400 hover:text-white hover:bg-primary-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/ayush2412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-dark-300 text-gray-400 hover:text-white hover:bg-primary-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Profile image with glow effect */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500 shadow-neon relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHbJ_OCWU3NRA/profile-displayphoto-shrink_400_400/B56ZS9SwV9HQAk-/0/1738342603700?e=1750896000&v=beta&t=IQNX3uMk3ny8OHsENA2Y82Mu12GE_n0qEOIjVRCBT0w"
                  alt="Ayush"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-secondary-500/30 backdrop-blur-sm"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-accent-500/20 backdrop-blur-sm"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="text-gray-400 text-sm mb-2">Scroll Down</div>
          <div className="w-5 h-10 rounded-full border-2 border-gray-400 flex justify-center">
            <motion.div
              className="w-1 h-2 bg-primary-500 rounded-full mt-1"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;