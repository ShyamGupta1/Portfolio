import { HackathonType } from '../types';

export const hackathonData: HackathonType[] = [
  {
    name: 'Global Hack 2023',
    date: 'October 2023',
    duration: '48 hours',
    teamSize: 4,
    projectName: 'MediBlock',
    description: 'A blockchain-based medical records system that securely stores and shares patient data between healthcare providers while maintaining HIPAA compliance and patient privacy.',
    techStack: ['Solidity', 'React', 'Web3.js', 'IPFS', 'Express'],
    myRole: 'Led the blockchain development, designed smart contracts, and integrated Web3.js with the frontend React application.',
    position: 'Participated',
    githubLink: 'https://github.com/username/mediblock',
    demoLink: 'https://mediblock-demo.netlify.app'
  },
  {
    name: 'CodeJam 2023',
    date: 'July 2023',
    duration: '36 hours',
    teamSize: 3,
    projectName: 'EcoTrack',
    description: 'An IoT-based solution that helps users track and reduce their carbon footprint through real-time monitoring of energy usage, transportation habits, and shopping choices.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Arduino', 'MQTT'],
    myRole: 'Developed the mobile application using React Native and implemented the backend API for data processing and analysis.',
    position: 'Participated',
    githubLink: 'https://github.com/username/ecotrack'
  },
  {
    name: 'University Tech Fest',
    date: 'March 2023',
    duration: '24 hours',
    teamSize: 2,
    projectName: 'StudyBuddy',
    description: 'An AI-powered study companion app that uses machine learning to create personalized study plans, quiz students, and provide feedback on their progress.',
    techStack: ['Python', 'Flask', 'TensorFlow', 'React', 'PostgreSQL'],
    myRole: 'Implemented the machine learning algorithms for content analysis and built the recommendation system for study materials.',
    githubLink: 'https://github.com/username/studybuddy',
    demoLink: 'https://studybuddy-demo.netlify.app'
  }
];