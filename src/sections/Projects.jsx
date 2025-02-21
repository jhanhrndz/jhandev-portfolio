import React, { useState, useEffect } from 'react';
import { FolderGit2 } from 'lucide-react';
import { projects } from '../data/ProjectsData';
import ProjectCard from '../components/ProjectsCard';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Pequeño retraso para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="flex items-start px-4 py-12 mt-20">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-b from-blue-400/20 to-blue-500/20 absolute blur-md"></div>
              <div className="w-14 h-14 rounded-full bg-blue-500/20 relative flex items-center justify-center">
                <FolderGit2 className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <span className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm text-blue-400 rounded-full text-sm font-medium"> My recent projects </span>
          </div>
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My <span className="text-blue-400">Projects</span>
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg text-gray-400 leading-relaxed text-left">
              Discover the projects I've worked on, developing solutions to address real-world challenges.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                isLoaded={isLoaded}
                delay={index * 50} // Crea un efecto escalonado
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;