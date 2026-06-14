import PropTypes from 'prop-types';

const SocialLink = ({ href, icon: Icon, children, variant = 'pill', className = '', ...props }) => {
  const isExternal = href.startsWith('http') || href.startsWith('www');
  const target = isExternal ? '_blank' : undefined;
  const rel = isExternal ? 'noopener noreferrer' : undefined;

  let baseStyles = '';
  if (variant === 'pill') {
    baseStyles = 'flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 text-sm max-sm:px-3 max-sm:py-1 max-sm:text-[9px] hover:scale-105 shadow-md hover:shadow-lg';
  } else if (variant === 'circle') {
    baseStyles = 'p-2.5 bg-gray-700/50 hover:bg-gray-600/50 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center';
  } else if (variant === 'purple-btn') {
    baseStyles = 'flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-xs font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg';
  } else if (variant === 'green-btn') {
    baseStyles = 'w-full px-4 py-2 bg-green-600/30 hover:bg-green-600/50 text-green-200 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md';
  }

  // Adjust icon size dynamically based on variant
  const iconSizeClass = variant === 'pill' 
    ? 'w-4 h-4 max-sm:w-3 max-sm:h-3' 
    : variant === 'circle' 
      ? 'w-5 h-5' 
      : 'w-4 h-4';

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${className}`}
      {...props}
    >
      {Icon && <Icon className={iconSizeClass} />}
      {children}
    </a>
  );
};

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['pill', 'circle', 'purple-btn', 'green-btn']),
  className: PropTypes.string,
};

export default SocialLink;
