// Archivo: src/components/Projects.jsx
import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { projects } from '../data/ProjectsData';
import ProjectCard from '../components/ProjectsCard';

const Projects = () => {
  return (
    <section id="proyectos" className="flex items-start px-4 py-12 mt-20">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col items-start gap-6">
          {/* Título de la sección */}
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">
              Proyectos
            </h2>
          </div>

          {/* Grid de proyectos */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;