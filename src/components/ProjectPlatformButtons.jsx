import PropTypes from 'prop-types';
import { Github, ExternalLink, PlayCircle } from 'lucide-react';
import kaggleIcon from "../assets/icons/kaggleIcon-white.svg";

const GoogleColab = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#ffb300"
      d="M90.437 26.434c-20.748 0-37.567 16.82-37.567 37.567c0 20.748 16.82 37.563 37.567 37.563C111.181 101.564 128 84.749 128 64s-16.82-37.567-37.563-37.567zm0 55.651c-9.992 0-18.088-8.096-18.088-18.084c0-9.992 8.096-18.088 18.088-18.088c9.988 0 18.084 8.096 18.084 18.088c0 9.988-8.096 18.084-18.084 18.084m0 0"
    ></path>
    <path
      fill="#ffb300"
      d="M50.477 76.664v-.008a18.02 18.02 0 0 1-12.91 5.43c-9.992 0-18.088-8.097-18.088-18.085c0-9.992 8.096-18.088 18.088-18.088c5.092 0 9.686 2.11 12.973 5.499l10.434-16.764c-6.423-5.127-14.551-8.214-23.407-8.214C16.819 26.434 0 43.254 0 64.001c0 20.748 16.82 37.563 37.567 37.563c8.801 0 16.882-3.051 23.286-8.12zm0 0"
    ></path>
    <path
      fill="#f57a00"
      d="M19.479 64c0-4.974 2.01-9.474 5.256-12.745l-13.51-14.018C4.302 44.048 0 53.519 0 64c0 10.43 4.258 19.866 11.124 26.674L24.853 76.86A18.03 18.03 0 0 1 19.479 64m83.841-12.686a18.03 18.03 0 0 1 5.201 12.687c0 9.988-8.096 18.084-18.084 18.084c-5.084 0-9.667-2.1-12.953-5.476L63.57 90.232c6.823 6.984 16.33 11.332 26.866 11.332C111.181 101.564 128 84.749 128 64c0-10.255-4.117-19.534-10.771-26.31zm0 0"
    ></path>
  </svg>
);

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