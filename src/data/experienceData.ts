import { ExperienceType } from '../types';

export const experienceData: ExperienceType[] = [
  {
    company: 'TechSolutions Inc.',
    role: 'Freelance Full-Stack Developer',
    duration: 'Jan 2023 - Present',
    location: 'Remote',
    responsibilities: [
      'Developed and maintained custom web applications for various clients using React, Node.js, and MongoDB.',
      'Implemented responsive designs and optimized performance for mobile and desktop platforms.',
      'Collaborated with clients to gather requirements and provide technical solutions to business problems.',
      'Integrated third-party APIs and services including payment gateways and social media platforms.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Docker']
  },
  {
    company: 'CyberDefend Security',
    role: 'Cybersecurity Consultant (Part-time)',
    duration: 'Jun 2022 - Dec 2022',
    location: 'Bangalore, India',
    responsibilities: [
      'Conducted security assessments and penetration testing for client web applications and networks.',
      'Identified vulnerabilities and provided remediation steps to enhance security posture.',
      'Developed security awareness training materials for client organizations.',
      'Implemented security solutions including firewalls and intrusion detection systems.'
    ],
    technologies: ['Kali Linux', 'Nmap', 'Metasploit', 'Burp Suite', 'Wireshark']
  },
  {
    company: 'CodeCraft Academy',
    role: 'Teaching Assistant',
    duration: 'Aug 2021 - May 2022',
    location: 'Bangalore, India',
    responsibilities: [
      'Assisted professors in teaching programming fundamentals and web development courses.',
      'Conducted weekly tutoring sessions and code reviews for students.',
      'Developed supplementary learning materials and coding challenges.',
      'Mentored student teams during their capstone projects.'
    ],
    technologies: ['Java', 'Python', 'JavaScript', 'HTML/CSS', 'Git']
  },
  {
    company: 'DataVision Analytics',
    role: 'Open Source Contributor',
    duration: 'May 2021 - Aug 2021',
    location: 'Remote',
    responsibilities: [
      'Contributed to open-source data visualization libraries and frameworks.',
      'Fixed bugs and implemented new features in collaboration with the maintainer team.',
      'Improved documentation and created examples to help new users.',
      'Participated in code reviews and community discussions.'
    ],
    technologies: ['D3.js', 'React', 'TypeScript', 'Python', 'Matplotlib']
  }
];