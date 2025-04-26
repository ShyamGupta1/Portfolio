import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Shield, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Web Development', icon: <Globe className="text-primary-500" size={24} /> },
    { name: 'Cyber Security', icon: <Shield className="text-accent-500" size={24} /> },
    { name: 'Programming', icon: <Code className="text-secondary-500" size={24} /> },
    { name: 'Problem Solving', icon: <Zap className="text-warning-500" size={24} /> },
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'C++',
    'SQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Linux', 'Network Security'
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-2">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Ayush coding"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Computer Science Engineer & Web Developer
            </h3>
            
            <p className="text-gray-300 mb-6">
              I'm a passionate Computer Science Engineer specializing in web development and cyber security. With a keen interest in building secure, scalable applications, I blend technical expertise with creative problem-solving to deliver exceptional results.
            </p>
            
            <p className="text-gray-300 mb-6">
              My journey in technology began with competitive programming, which honed my algorithmic thinking and efficiency. This foundation has proven invaluable in my professional work, allowing me to write optimized code and tackle complex challenges.
            </p>

            {/* Core skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Core Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center p-3 rounded-lg bg-dark-300 border border-dark-100"
                  >
                    <div className="mr-3">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="px-3 py-1 rounded-full bg-dark-300 text-sm border border-dark-100 hover:border-primary-500 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;