import { Code2, Brain } from 'lucide-react';
import { technicalSkills, softSkills } from '../data/SkillsData';

const Skills = () => {
  return (
    <section id="skills" className="flex items-start px-4 py-12 mt-20">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-b from-blue-400/20 to-blue-500/20 absolute blur-md"></div>
              <div className="w-14 h-14 rounded-full bg-blue-500/20 relative flex items-center justify-center">
                <Code2 className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <span className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm text-blue-400 rounded-full text-sm font-medium"> My tech stack and skills </span>
          </div>
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white"> <span className="text-blue-400">Technical</span> skills </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-base md:text-lg text-gray-400 leading-relaxed text-left">
              I use these technologies and tools to develop solutions that solve real problems, applying both technical skills and agile methodologies to optimize performance and user experience.
            </p>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-gray-800/30 transition-all transform hover:scale-105 hover:-translate-y-1 duration-300 group"
                >
                  <i
                    className={`${skill.icon} text-3xl transition-transform duration-300 group-hover:rotate-6`}
                    style={{ color: skill.color }}
                  ></i>
                  <span className="text-gray-300 text-xs text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full mt-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-emerald-400/20 to-emerald-500/20 absolute blur-md"></div>
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 relative flex items-center justify-center">
                  <Brain className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <span className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm text-emerald-400 rounded-full text-sm font-medium"> Personal skills </span>
            </div>
            <div className="text-left mb-6 mt-3">
              <h2 className="text-3xl font-bold text-white"> <span className="text-emerald-400">Soft</span> skills </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <skill.icon className="w-4 h-4" style={{ color: skill.color }} />
                    <h4 className="text-gray-200 font-medium text-sm">{skill.name}</h4>
                  </div>
                  <p className="text-gray-400 text-xs opacity-80 group-hover:opacity-100 transition-opacity duration-300">{skill.description}</p>
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