'use client';

import resumeData from '@/data/resume.json';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.skills.map((category) => (
            <div
              key={category.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;