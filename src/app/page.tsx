'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="container mx-auto px-4 py-8 space-y-20">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
