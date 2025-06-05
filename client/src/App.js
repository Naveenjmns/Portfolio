import React, { useState, useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <PersonalInfo />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
