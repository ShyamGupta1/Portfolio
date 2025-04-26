import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sections
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import AchievementsSection from './components/sections/AchievementsSection';
import CompetitiveProgrammingSection from './components/sections/CompetitiveProgrammingSection';
import HackathonSection from './components/sections/HackathonSection';
import ExtracurricularsSection from './components/sections/ExtracurricularsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className={`relative min-h-screen ${theme === 'dark' ? 'bg-[#000000] text-white' : 'bg-white text-gray-900'}`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-b ${
          theme === 'dark' 
            ? 'from-primary-900/20 via-[#000000] to-[#000000]' 
            : 'from-primary-50 via-white to-white'
        } pointer-events-none`}></div>
        
        {/* Grid pattern overlay */}
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtMTJ2Nmg2di02aC02em0tMTIgMTJ2Nmg2di02aC02em0wLTEydjZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMi0xMnY2aDZ2LTZoLTZ6bS02IDEydjZoNnYtNmgtNnptLTYgMHY2aDZ2LTZoLTZ6bTYtMTJ2Nmg2di02aC02em0tNiAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]
          opacity-10 bg-repeat pointer-events-none`}></div>
        
        <Header theme={theme} setTheme={setTheme} />
        
        <main className="relative z-10">
          <HeroSection />
          <div className="py-8">
            <AboutSection />
          </div>
          <div className="py-8">
            <ProjectsSection />
          </div>
          <div className="section-spacing">
            <ExperienceSection />
          </div>
          <div className="section-spacing">
            <CompetitiveProgrammingSection />
          </div>
          <div className="section-spacing">
            <HackathonSection />
          </div>
          <div className="section-spacing">
            <AchievementsSection />
          </div>
          <div className="section-spacing">
            <ExtracurricularsSection />
          </div>
          <div className="section-spacing">
            <ContactSection />
          </div>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;