import React from 'react';
import { motion } from 'framer-motion';
import { Award, Check, Trophy, FileCheck } from 'lucide-react';
import { achievementsData } from '../../data/achievementsData';

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto">Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Certifications, awards, and milestones from my professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6"
          >
            <div className="flex items-center mb-6">
              <FileCheck className="text-secondary-500 mr-3" size={24} />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {achievementsData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-dark-300 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{cert.name}</h4>
                    <span className="text-xs text-gray-400">{cert.date}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                  
                  {cert.skills && (
                    <div className="mt-2">
                      <div className="text-xs text-gray-400 mb-1">Skills:</div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-dark-200 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary-400 hover:text-primary-300 inline-flex items-center mt-2"
                    >
                      View Certificate
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-6"
          >
            <div className="flex items-center mb-6">
              <Trophy className="text-accent-500 mr-3" size={24} />
              <h3 className="text-xl font-bold">Awards & Recognition</h3>
            </div>
            
            <div className="space-y-4">
              {achievementsData.awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-dark-300 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{award.name}</h4>
                    <span className="text-xs text-gray-400">{award.date}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{award.presenter}</p>
                  <p className="text-sm mt-2">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Badges/Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <div className="mt-12 glass p-6 md:p-8">
            <div className="flex items-center mb-6">
              <Award className="text-warning-500 mr-3" size={24} />
              <h3 className="text-xl font-bold">Other Achievements</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievementsData.otherAchievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <div className="mr-3 text-primary-500 mt-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;