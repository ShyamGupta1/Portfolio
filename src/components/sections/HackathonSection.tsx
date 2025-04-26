import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Clock, Lightbulb } from 'lucide-react';
import { hackathonData } from '../../data/hackathonData';

const HackathonSection: React.FC = () => {
  return (
    <section id="hackathons" className="py-20 relative">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto">Hackathon Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projects built during intense hackathons, showcasing rapid problem-solving and teamwork skills.
          </p>
        </motion.div>

        <div className="space-y-10">
          {hackathonData.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {/* Hackathon Info */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold mb-2">{hackathon.name}</h3>
                    <div className="text-sm text-gray-400 mb-4">{hackathon.date}</div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="text-primary-500" size={16} />
                        <span>{hackathon.duration}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="text-secondary-500" size={16} />
                        <span>Team of {hackathon.teamSize}</span>
                      </div>
                      
                      {hackathon.position && (
                        <div className="flex items-center gap-2 text-sm">
                          <Trophy className="text-accent-500" size={16} />
                          <span>{hackathon.position}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold mb-2">
                      <span className="mr-2">{hackathon.projectName}</span>
                      {hackathon.position && (
                        <span className="text-xs font-normal py-1 px-2 rounded-full bg-accent-500 text-white">
                          {hackathon.position}
                        </span>
                      )}
                    </h4>
                    
                    <p className="text-gray-300 mb-4">
                      {hackathon.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">Tech Stack:</div>
                      <div className="flex flex-wrap gap-2">
                        {hackathon.techStack.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-dark-300 rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* My Contribution */}
                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2 flex items-center gap-1">
                        <Lightbulb className="text-warning-500" size={16} />
                        <span>My Contribution:</span>
                      </div>
                      <p className="text-sm text-gray-400">
                        {hackathon.myRole}
                      </p>
                    </div>
                    
                    {/* Links */}
                    {(hackathon.githubLink || hackathon.demoLink) && (
                      <div className="flex gap-3 mt-4">
                        {hackathon.githubLink && (
                          <a
                            href={hackathon.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm py-1 px-3 rounded-full bg-dark-300 hover:bg-dark-200 transition-colors"
                          >
                            View Code
                          </a>
                        )}
                        
                        {hackathon.demoLink && (
                          <a
                            href={hackathon.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm py-1 px-3 rounded-full bg-primary-500 hover:bg-primary-600 transition-colors"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;