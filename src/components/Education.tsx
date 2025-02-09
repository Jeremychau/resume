'use client';

import resumeData from '@/data/resume.json';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Education
        </h2>

        <div className="space-y-12">
          {resumeData.education.map((edu) => (
            <div
              key={edu.degree}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {edu.degree}
                </h3>
                <div className="text-gray-600 dark:text-gray-300">
                  {edu.school} • {edu.location}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">
                  {edu.period}
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {edu.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;