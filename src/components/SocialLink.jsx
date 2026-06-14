import PropTypes from 'prop-types';

const SocialLink = ({ href, icon: Icon, children, variant = 'pill', className = '', ...props }) => {
  const isExternal = href.startsWith('http') || href.startsWith('www');
  const target = isExternal ? '_blank' : undefined;
  const rel = isExternal ? 'noopener noreferrer' : undefined;

  let baseStyles = '';
  if (variant === 'pill') {
    baseStyles = 'flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-white rounded-full transition-all duration-300 text-sm max-sm:px-3 max-sm:py-1 max-sm:text-[9px] hover:scale-105 shadow-md hover:shadow-lg';
  } else if (variant === 'primary-pill') {
    baseStyles = 'flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 text-sm md:text-base font-semibold hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25 dark:shadow-indigo-950/50 hover:shadow-xl cursor-pointer';
  } else if (variant === 'secondary-pill') {
    baseStyles = 'flex items-center gap-2.5 px-6 py-3 bg-white/40 hover:bg-white/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 rounded-full transition-all duration-300 text-sm md:text-base font-medium hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer';
  } else if (variant === 'circle') {
    baseStyles = 'p-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50 rounded-full text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center';
  } else if (variant === 'purple-btn') {
    baseStyles = 'flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-xs font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg';
  } else if (variant === 'green-btn') {
    baseStyles = 'w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg';
  }

  // Adjust icon size dynamically based on variant
  const iconSizeClass = (variant === 'pill' || variant === 'primary-pill' || variant === 'secondary-pill')
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
  variant: PropTypes.oneOf(['pill', 'primary-pill', 'secondary-pill', 'circle', 'purple-btn', 'green-btn']),
  className: PropTypes.string,
};

export default SocialLink;
