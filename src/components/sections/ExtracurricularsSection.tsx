import React from 'react';
import { motion } from 'framer-motion';
import { Music, Brush, Dumbbell, Heart } from 'lucide-react';
import { extracurricularData } from '../../data/extracurricularData';

const ExtracurricularsSection: React.FC = () => {
  // Icons mapping based on category
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'music':
        return <Music className="text-primary-500" size={24} />;
      case 'art':
        return <Brush className="text-secondary-500" size={24} />;
      case 'sports':
        return <Dumbbell className="text-accent-500" size={24} />;
      case 'volunteering':
        return <Heart className="text-error-500" size={24} />;
      default:
        return <Heart className="text-warning-500" size={24} />;
    }
  };

  return (
    <section id="extracurriculars" className="py-20 relative">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto">Beyond Coding</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Activities and interests outside of academics and technology that shape who I am.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {extracurricularData.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover p-6 flex flex-col"
            >
              <div className="mb-4">
                {getIcon(activity.category)}
              </div>
              
              <h3 className="text-lg font-bold mb-2">{activity.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{activity.category}</p>
              <p className="text-sm mb-4 flex-grow">{activity.description}</p>
              
              {activity.achievements && activity.achievements.length > 0 && (
                <div className="mt-auto">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Highlights</h4>
                  <ul className="text-sm space-y-1">
                    {activity.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quote about balance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
            "I believe that maintaining a balance between technical pursuits and creative outlets leads to innovation 
            and a fresh perspective on problem-solving."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtracurricularsSection;