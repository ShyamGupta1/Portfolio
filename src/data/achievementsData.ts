import { CertificationType, AwardType, AchievementType } from '../types';

interface AchievementsDataType {
  certifications: CertificationType[];
  awards: AwardType[];
  otherAchievements: AchievementType[];
}

export const achievementsData: AchievementsDataType = {
  certifications: [
    {
      name: 'Introduction to Large Language Models',
      issuer: 'Amazon Web Services',
      date: 'Dec 2023',
      skills: ['AWS', 'Cloud Architecture', 'Serverless', 'Infrastructure as Code'],
      link: 'https://www.coursera.org/account/accomplishments/verify/4UZF3C2DA3CV'
    },
    {
      name: ' Dynamic Programming, Greedy Algorithms',
      issuer: 'EC-Council',
      date: 'Aug 2023',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security'],
      link: 'https://coursera.org/verify/FNQECK77WMHN'
    },
    {
      name: ' Generative AI with Large Language Models',
      issuer: 'Stanford University (Coursera)',
      date: 'May 2023',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      link: 'https://coursera.org/verify/XNVUQF96EJFC'
    },
    {
      name: ' Introduction to Generative AI',
      issuer: 'Meta',
      date: 'Feb 2023',
      skills: ['React', 'Redux', 'React Router', 'JavaScript ES6+'],
      link: 'https://coursera.org/verify/VFFGN3JCVA2A'
    }
  ],
  awards: [
    {
      name: 'Dean\'s List - Academic Excellence',
      presenter: 'University of Technology',
      date: '2022-2023',
      description: 'Recognized for outstanding academic achievement with a GPA in the top 5% of the Computer Science department.'
    },
    {
      name: 'Best Technical Innovation Award',
      presenter: 'National Engineering Symposium',
      date: 'Nov 2022',
      description: 'Awarded for developing an innovative blockchain-based solution for supply chain transparency.'
    },
    {
      name: 'Google Code-In Finalist',
      presenter: 'Google',
      date: 'Jan 2022',
      description: 'Selected as a regional finalist for contributions to open source projects during the Google Code-In competition.'
    }
  ],
  otherAchievements: [
    {
      title: 'Published Research Paper',
      description: 'Co-authored a research paper on "Secure Multi-Factor Authentication Systems" published in the International Journal of Cybersecurity.'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to several open-source projects with over 50 pull requests merged on GitHub.'
    },
    {
      title: 'Tech Community Leader',
      description: 'Founded and led a local tech community with over 500 members, organizing monthly meetups and workshops.'
    },
    {
      title: 'Hackathon Mentor',
      description: 'Served as a mentor at 5+ university hackathons, guiding student teams on technical challenges and project development.'
    }
  ]
};