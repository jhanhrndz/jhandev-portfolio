import PropTypes from 'prop-types';
import { Github, ExternalLink, PlayCircle, GoogleColab } from './PlatformIcons';
import kaggleIcon from '../assets/icons/kaggleIcon-white.svg';

const iconBase = "transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110";
const textBase = "transition-all duration-300 hover:text-blue-300";

const ProjectPlatformButtons = ({ platforms }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
        {platforms.map((platform, idx) => {
            const isLastOdd = platforms.length % 2 === 1 && idx === platforms.length - 1;
            const colSpanClass = isLastOdd ? 'lg:col-span-2' : '';

            let content = null;
            switch (platform.type) {
                case "github":
                    content = (
                        <>
                            <Github size={18} className={iconBase} />
                            <span className={textBase}>GitHub</span>
                        </>
                    );
                    break;
                case "kaggle":
                    content = (
                        <>
                            <img src={kaggleIcon} alt="Kaggle Logo" className={`size-4 ${iconBase}`} />
                            <span className={textBase}>Kaggle</span>
                        </>
                    );
                    break;
                case "colab":
                    content = (
                        <>
                            <GoogleColab className={`size-5 ${iconBase}`} />
                            <span className={textBase}>Google Colab</span>
                        </>
                    );
                    break;
                case "demo":
                    content = (
                        <>
                            <ExternalLink size={18} className={iconBase} />
                            <span className={textBase}>Demo</span>
                        </>
                    );
                    break;
                case "live":
                    content = (
                        <>
                            <PlayCircle size={18} className={iconBase} />
                            <span className={textBase}>Live</span>
                        </>
                    );
                    break;
                default:
                    return null;
            }

            return (
                <a
                    key={idx}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm group-hover:font-medium 
                        ${platform.type === 'github' ? 'bg-gray-700 hover:bg-gray-600 text-white' : ''}
                        ${platform.type === 'kaggle' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}
                        ${platform.type === 'colab' ? 'bg-gray-700 hover:bg-gray-600 text-white' : ''}
                        ${platform.type === 'demo' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}
                        ${platform.type === 'live' ? 'bg-red-600 hover:bg-red-700 text-white' : ''}
                        ${colSpanClass}
                        shadow-md hover:shadow-xl
                    `}
                >
                    {content}
                </a>
            );
        })}
    </div>
);

ProjectPlatformButtons.propTypes = {
    platforms: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['github', 'kaggle', 'demo', 'live']).isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProjectPlatformButtons;