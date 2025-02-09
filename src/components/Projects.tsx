'use client';

import resumeData from '@/data/resume.json';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
                      tabIndex={0}
                      aria-label={`Visit live demo of ${project.title}`}
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                      tabIndex={0}
                      aria-label={`View source code of ${project.title}`}
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;