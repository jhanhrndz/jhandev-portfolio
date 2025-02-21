import React from 'react';
import { Code2, Brain } from 'lucide-react';
import { technicalSkills, softSkills } from '../data/SkillsData';

const Skills = () => {
  return (
    <section id="habilidades" className="flex items-start px-4 py-12 mt-20">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">
              Habilidades y tecnologías
            </h2>
          </div>

          {/* Habilidades técnicas */}
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

          {/* Habilidades blandas */}
          <div className="w-full mt-4">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">
                Habilidades blandas
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                    <h4 className="text-gray-200 font-medium">{skill.name}</h4>
                  </div>
                  <p className="text-gray-400 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">{skill.description}</p>
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