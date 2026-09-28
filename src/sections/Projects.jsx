import { useState } from 'react';
import { FolderGit2, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/ProjectsData';
import ProjectCard from '../components/ProjectsCard';

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
      setCurrentPage(newPage);
      const section = document.getElementById('projects');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="projects" className="flex items-start px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-b from-indigo-200/40 to-indigo-300/40 dark:from-indigo-400/20 dark:to-indigo-500/20 absolute blur-md"></div>
              <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-500/20 relative flex items-center justify-center">
                <FolderGit2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
              My recent projects
            </span>
          </div>
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-left">
              Discover the projects I&#39;ve worked on, developing solutions to address real-world challenges.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentProjects.map((project, index) => (
              <ProjectCard 
                key={`${currentPage}-${project.title}`} 
                project={project} 
                delay={index * 50}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="w-full flex items-center justify-center gap-2 pt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center shadow-sm"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`min-w-10 h-10 px-3.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center ${
                      currentPage === page
                        ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-500/25 border border-indigo-600 dark:border-indigo-500'
                        : 'border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-sm'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center shadow-sm"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
