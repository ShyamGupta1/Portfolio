import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../ui/ExperienceCard';
import { experienceData } from '../../data/experienceData';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto">Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey, freelance work, and contributions to open-source projects.
          </p>
        </motion.div>

        {/* Timeline for experience */}
        <div className="relative">
          {/* Line for timeline */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary-500/80 via-primary-500/50 to-transparent"></div>
          
          {/* Experience cards */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;