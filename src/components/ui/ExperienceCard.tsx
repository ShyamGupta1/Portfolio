import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { ExperienceType } from '../../types';

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
  isLeft: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, isLeft }) => {
  return (
    <div className={`relative flex items-center justify-between ${isLeft ? 'flex-row-reverse md:flex-row' : 'flex-row-reverse'}`}>
      <div className="hidden md:block w-5/12"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary-500 border-4 border-dark-900 z-10"></div>
      
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full md:w-5/12 z-10"
      >
        <div className="glass p-6">
          <h3 className="text-xl font-bold">{experience.role}</h3>
          <h4 className="text-lg text-primary-400">{experience.company}</h4>
          
          <div className="flex items-center text-sm text-gray-400 mt-2 mb-4">
            <div className="flex items-center mr-4">
              <Calendar size={14} className="mr-1" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              <span>{experience.location}</span>
            </div>
          </div>
          
          <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            {experience.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          
          {experience.technologies && (
            <div className="mt-4">
              <div className="text-sm text-gray-400 mb-2">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-dark-300 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;