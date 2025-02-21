import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-800/30 rounded-xl overflow-hidden group hover:bg-gray-700/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex flex-col">
            <div className="relative w-full h-36 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-xs mb-3 flex-grow opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-2 py-0.5 bg-gray-700/50 rounded-full text-xs text-blue-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className={project.demo ? "grid grid-cols-2 gap-2" : "grid grid-cols-1"}>
                    <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-xs"
                    >
                        <Github size={12} />
                        GitHub
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-xs"
                        >
                            <ExternalLink size={12} />
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;