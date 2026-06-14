import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ProjectPlatformButtons from './ProjectPlatformButtons';

const ProjectCard = ({ project, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`bg-white/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 rounded-xl overflow-hidden group flex flex-col transition-all duration-500 ease-out ${
                isVisible
                    ? 'opacity-100 translate-y-0 hover:scale-105 hover:-translate-y-1 hover:bg-white dark:hover:bg-zinc-800/50'
                    : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="relative w-full h-36 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-3 flex-grow opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800/50 rounded-full text-[10px] text-indigo-600 dark:text-indigo-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <ProjectPlatformButtons platforms={project.platforms} />
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        platforms: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.oneOf(['github', 'kaggle', 'demo', 'live', 'colab']).isRequired,
                url: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
    delay: PropTypes.number,
};

export default ProjectCard;
