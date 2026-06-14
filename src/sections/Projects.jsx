import { FolderGit2 } from 'lucide-react';
import { projects } from '../data/ProjectsData';
import ProjectCard from '../components/ProjectsCard';

const Projects = () => {
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
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
