'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import resumeData from '@/data/resume.json';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Education'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {resumeData.personalInfo.name}
          </h1>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                tabIndex={0}
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              tabIndex={0}
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-gray-300" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;