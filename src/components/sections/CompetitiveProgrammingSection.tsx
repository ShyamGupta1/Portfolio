import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award, BarChart, ExternalLink } from 'lucide-react';

const CompetitiveProgrammingSection: React.FC = () => {
  const platforms = [
    {
      name: 'LeetCode',
      icon: <Code className="text-warning-500" size={24} />,
      username: 'Ayush-2412',
      link: 'https://leetcode.com/u/Ayush-2412/',
      stats: [
        { label: 'Problems Solved', value: '450+' },
        { label: 'Contest Rating', value: '1842' },
      ],
      color: 'from-warning-500 to-warning-700',
    },
    {
      name: 'GeeksforGeeks',
      icon: <BarChart className="text-secondary-500" size={24} />,
      username: 'ayushdy0b3',
      link: 'https://www.geeksforgeeks.org/user/ayushdy0b3/ ',
      stats: [
        { label: 'Problems Solved', value: '320+' },
        { label: 'Max Rating', value: 'Specialist (1430)' },
      ],
      color: 'from-secondary-500 to-secondary-700',
    },
    {
      name: 'Code360',
      icon: <Award className="text-primary-500" size={24} />,
      username: 'AyushCode360',
      link: 'https://www.naukri.com/code360/profile/286515a5-4787-44d7-9e21-0c2ab54a1f3a',
      stats: [
        { label: 'Skills', value: '5-Star in Problem Solving' },
        { label: 'Badges', value: '12 Gold Badges' },
      ],
      color: 'from-primary-500 to-primary-700',
    },
  ];

  return (
    <section id="competitive-programming" className="py-20 relative">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto">Competitive Programming</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My coding profiles and achievements across various competitive programming platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card p-6 h-full">
                {/* Header with gradient */}
                <div className={`h-16 -mt-6 -mx-6 mb-6 rounded-t-lg bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                  <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                </div>

                <div className="flex items-center mb-4">
                  <span className="mr-3">{platform.icon}</span>
                  <span className="text-lg font-medium">{platform.username}</span>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  {platform.stats.map((stat, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-gray-400">{stat.label}:</span>
                      <span className="font-medium">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* View Profile Link */}
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-auto w-full py-2 bg-dark-200 hover:bg-dark-100 rounded-md transition-colors text-sm"
                >
                  <span>View Profile</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgrammingSection;