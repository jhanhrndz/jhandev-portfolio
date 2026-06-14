import { useState } from 'react';
import PropTypes from 'prop-types';
import { experienceData, educationData } from '../data/ExperienceEducationData';
import { Briefcase, GraduationCap, ChevronRight, Check, MapPin, Calendar } from 'lucide-react';

/* ── Timeline Card (reusable for both columns) ── */
const TimelineCard = ({ item, isExp, isExpanded, onToggle }) => {
  const IconComponent = item.icon || (isExp ? Briefcase : GraduationCap);

  return (
    <div className="relative w-full pl-10">
      {/* Timeline Node/Dot */}
      <div
        className={`absolute left-0 top-1.5 w-[34px] h-[34px] rounded-full border-2 border-white dark:border-zinc-950 flex items-center justify-center z-10 transition-all duration-300 ${
          isExp
            ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400'
            : 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
        }`}
      >
        <IconComponent className="w-4 h-4" />
      </div>

      {/* Card */}
      <div className="w-full bg-white/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-5 hover:bg-white dark:hover:bg-zinc-800/20 transition-all duration-300 shadow-sm hover:shadow-md">
        <div className="flex flex-col gap-1 mb-3">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
            {isExp ? item.company : item.institution}
          </h3>
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            {isExp ? item.role : item.degree}
          </p>
          <div className="flex flex-wrap gap-3 mt-1 text-xs text-zinc-400 dark:text-zinc-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {item.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Expandable details for experience items */}
        {isExp && item.responsibilities && (
          <div className="mt-3 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <button
              onClick={() => onToggle(item.id)}
              className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors focus:outline-none mb-3"
            >
              <ChevronRight
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-90' : ''
                }`}
              />
              {isExpanded ? 'Hide details' : 'Show details'}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold mb-2">
                  Responsibilities
                </h4>
                <ul className="space-y-1.5 pl-1">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-2 shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              {item.achievements && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold mb-2">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                        <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

TimelineCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    company: PropTypes.string,
    institution: PropTypes.string,
    role: PropTypes.string,
    degree: PropTypes.string,
    period: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string),
    achievements: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  isExp: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

/* ── Main Section ── */
const ExperienceEducation = () => {
  const [expandedItems, setExpandedItems] = useState({
    'alzak-group': true,
  });

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="flex items-start px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col items-start gap-6">

          {/* Section Header */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-b from-indigo-200/40 to-indigo-300/40 dark:from-indigo-400/20 dark:to-indigo-500/20 absolute blur-md"></div>
              <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-500/20 relative flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
              My journey
            </span>
          </div>

          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              Experience & <span className="text-indigo-600 dark:text-indigo-400">Education</span>
            </h2>
          </div>

          <div className="max-w-3xl mb-4">
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-left">
              A timeline of my professional experience and education background, showing my growth and technical studies.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

            {/* ── Experience Column ── */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-500/15">
                  <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Work Experience
                </h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[16px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-400 via-indigo-300 to-transparent dark:from-indigo-500 dark:via-indigo-400/50 dark:to-transparent"></div>

                <div className="space-y-8">
                  {experienceData.map((item) => (
                    <TimelineCard
                      key={item.id}
                      item={item}
                      isExp={true}
                      isExpanded={expandedItems[item.id]}
                      onToggle={toggleExpand}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Education Column ── */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/15">
                  <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[16px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-300 to-transparent dark:from-emerald-500 dark:via-emerald-400/50 dark:to-transparent"></div>

                <div className="space-y-8">
                  {educationData.map((item) => (
                    <TimelineCard
                      key={item.id}
                      item={item}
                      isExp={false}
                      isExpanded={false}
                      onToggle={toggleExpand}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
