import { Code2, Brain } from 'lucide-react';
import { technicalSkills, softSkills } from '../data/SkillsData';

const skillCategories = [
  {
    label: 'Frontend',
    names: ['React', 'Angular', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
    accent: 'indigo',
  },
  {
    label: 'Backend',
    names: ['Node.js', 'Express', 'Spring Boot', 'Django', 'Flask'],
    accent: 'emerald',
  },
  {
    label: 'Languages',
    names: ['JavaScript', 'TypeScript', 'Java', 'Python', 'R', 'PHP'],
    accent: 'amber',
  },
  {
    label: 'Databases',
    names: ['Oracle', 'MySQL', 'Postgres', 'SQLite'],
    accent: 'rose',
  },
  {
    label: 'Tools',
    names: ['Git', 'GitHub', 'Postman', 'Figma'],
    accent: 'sky',
  },
  {
    label: 'Data Analysis',
    names: ['Excel', 'Python', 'R'],
    accent: 'violet',
  },
];

const accentStyles = {
  indigo: {
    badge: 'bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20',
    border: 'border-indigo-200/60 dark:border-indigo-500/15',
    glow: 'from-indigo-100/50 dark:from-indigo-500/5',
  },
  emerald: {
    badge: 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20',
    border: 'border-emerald-200/60 dark:border-emerald-500/15',
    glow: 'from-emerald-100/50 dark:from-emerald-500/5',
  },
  amber: {
    badge: 'bg-amber-100 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
    border: 'border-amber-200/60 dark:border-amber-500/15',
    glow: 'from-amber-100/50 dark:from-amber-500/5',
  },
  rose: {
    badge: 'bg-rose-100 dark:bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-500/20',
    border: 'border-rose-200/60 dark:border-rose-500/15',
    glow: 'from-rose-100/50 dark:from-rose-500/5',
  },
  sky: {
    badge: 'bg-sky-100 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-500/20',
    border: 'border-sky-200/60 dark:border-sky-500/15',
    glow: 'from-sky-100/50 dark:from-sky-500/5',
  },
  violet: {
    badge: 'bg-violet-100 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/20',
    border: 'border-violet-200/60 dark:border-violet-500/15',
    glow: 'from-violet-100/50 dark:from-violet-500/5',
  },
};

const Skills = () => {
  return (
    <section id="skills" className="flex items-start px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-b from-indigo-200/40 to-indigo-300/40 dark:from-indigo-400/20 dark:to-indigo-500/20 absolute blur-md"></div>
              <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-500/20 relative flex items-center justify-center">
                <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
              My tech stack and skills
            </span>
          </div>
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              <span className="text-indigo-600 dark:text-indigo-400">Technical</span> skills
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-left">
              I use these technologies and tools to develop solutions that solve real problems, applying both technical skills and agile methodologies to optimize performance and user experience.
            </p>
          </div>

          {/* Bento Category Cards Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => {
              const skills = category.names
                .map((name) => technicalSkills.find((s) => s.name === name))
                .filter(Boolean);
              const styles = accentStyles[category.accent];

              return (
                <div
                  key={category.label}
                  className={`relative overflow-hidden rounded-2xl border bg-white/50 dark:bg-zinc-900/20 backdrop-blur-sm p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${styles.border}`}
                >
                  {/* Subtle gradient glow at top */}
                  <div className={`absolute inset-x-0 top-0 h-16 bg-gradient-to-b ${styles.glow} to-transparent pointer-events-none`}></div>

                  {/* Category Badge */}
                  <div className="relative mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border ${styles.badge}`}>
                      {category.label}
                    </span>
                  </div>

                  {/* Skills grid inside card */}
                  <div className="relative grid grid-cols-3 gap-3">
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-zinc-100/80 dark:hover:bg-zinc-800/30 transition-all transform hover:scale-105 hover:-translate-y-0.5 duration-300 group"
                      >
                        {skill.name === 'Excel' ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6 text-[#107C41] shrink-0"
                            fill="currentColor"
                          >
                            <path d="M23 1.5q.4 0 .7.3t.3.7v19q0 .4-.3.7t-.7.3h-11q-.4 0-.7-.3t-.3-.7V1.5q0-.4.3-.7t.7-.3h11zm-11 6v1.5h1.5V7.5H12zm0 3v1.5h1.5v-1.5H12zm0 3v1.5h1.5v-1.5H12zm0 3v1.5h1.5v-1.5H12zm3-9v1.5h1.5V7.5H15zm0 3v1.5h1.5v-1.5H15zm0 3v1.5h1.5v-1.5H15zm0 3v1.5h1.5v-1.5H15zm3-9v1.5h1.5V7.5H18zm0 3v1.5h1.5v-1.5H18zm0 3v1.5h1.5v-1.5H18zm0 3v1.5h1.5v-1.5H18zm3-9v1.5h1.5V7.5H21zm0 3v1.5h1.5v-1.5H21zm0 3v1.5h1.5v-1.5H21zm0 3v1.5h1.5v-1.5H21zM1.4 5.4l8.8-1.5q.4-.1.6.2t.2.6v14.6q0 .4-.2.6t-.6.2l-8.8-1.5q-.4-.1-.6-.4t-.2-.6V6.4q0-.4.2-.6t.6-.4zm4.8 7.9L8.4 9.1H6.7L5.3 11.7l-1.3-2.6H2.3l2.2 4.2-2.3 4.2h1.7l1.5-2.8 1.4 2.8h1.7l-2.4-4.2z" />
                          </svg>
                        ) : (
                          <i
                            className={`${skill.icon} text-2xl transition-transform duration-300 group-hover:rotate-6 ${
                              ['GitHub', 'Express', 'Flask'].includes(skill.name) ? 'text-zinc-900 dark:text-white' : ''
                            }`}
                            style={['GitHub', 'Express', 'Flask'].includes(skill.name) ? {} : { color: skill.color }}
                          ></i>
                        )}
                        <span className="text-zinc-600 dark:text-zinc-300 text-[11px] text-center leading-tight opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soft Skills Section */}
          <div className="w-full mt-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-emerald-200/40 to-emerald-300/40 dark:from-emerald-400/20 dark:to-emerald-500/20 absolute blur-md"></div>
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 relative flex items-center justify-center">
                  <Brain className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 backdrop-blur-sm text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium">
                Personal skills
              </span>
            </div>
            <div className="text-left mb-6 mt-3">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                <span className="text-emerald-600 dark:text-emerald-400">Soft</span> skills
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3 bg-white/80 dark:bg-zinc-900/30 rounded-lg border border-zinc-200 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <skill.icon className="w-4 h-4" style={{ color: skill.color }} />
                    <h4 className="text-zinc-800 dark:text-zinc-200 font-medium text-sm">{skill.name}</h4>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;