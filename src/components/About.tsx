'use client';

import resumeData from '@/data/resume.json';

const About = () => {
  const { personalInfo } = resumeData;

  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {personalInfo.bio}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              {personalInfo.additionalInfo}
            </p>

            <div className="flex space-x-4 mt-6">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                tabIndex={0}
                aria-label="Visit my GitHub profile"
              >
                GitHub
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
                tabIndex={0}
                aria-label="Visit my LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 absolute inset-0" />
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="rounded-full relative z-10"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;