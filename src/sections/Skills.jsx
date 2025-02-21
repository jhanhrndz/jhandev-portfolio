import React from 'react';
import { 
  Code2, 
  Brain, 
  MessageSquare, 
  Users, 
  GitBranch, 
  Code, 
  Lightbulb,
  Shuffle,
  GraduationCap,
  Clock
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      name: 'React',
      icon: 'devicon-react-original',
      color: '#61DAFB'
    },
    {
      name: 'JavaScript',
      icon: 'devicon-javascript-plain',
      color: '#F7DF1E'
    },
    {
      name: 'Java',
      icon: 'devicon-java-plain',
      color: '#ED8B00'
    },
    {
      name: 'HTML5',
      icon: 'devicon-html5-plain',
      color: '#E34F26'
    },
    {
      name: 'CSS3',
      icon: 'devicon-css3-plain',
      color: '#1572B6'
    },
    {
      name: 'Python',
      icon: 'devicon-python-plain',
      color: '#3776AB'
    },
    {
      name: 'R',
      icon: 'devicon-r-plain',
      color: '#276DC3'
    },
    {
      name: 'Node.js',
      icon: 'devicon-nodejs-plain',
      color: '#339933'
    },
    {
      name: 'Tailwind',
      icon: 'devicon-tailwindcss-plain',
      color: '#06B6D4'
    },
    {
      name: 'Oracle',
      icon: 'devicon-oracle-plain',
      color: '#F80000'
    },
    {
      name: 'MySQL',
      icon: 'devicon-mysql-plain',
      color: '#4479A1'
    },
    {
      name: 'PHP',
      icon: 'devicon-php-plain',
      color: '#777BB4'
    },
    {
      name: 'Git',
      icon: 'devicon-git-plain',
      color: '#F05032'
    },
    {
      name: 'GitHub',
      icon: 'devicon-github-original',
      color: '#ffffff'
    },
    {
      name: 'Postman',
      icon: 'devicon-postman-plain',
      color: '#FF6C37'
    },
    {
      name: 'Figma',
      icon: 'devicon-figma-plain',
      color: '#F24E1E'
    },
    {
      name: 'Bootstrap',
      icon: 'devicon-bootstrap-plain',
      color: '#7952B3'
    }
  ];

  const softSkills = [
    {
      name: 'Comunicación efectiva',
      description: 'Capacidad para transmitir ideas de manera clara y asertiva, facilitando la colaboración en equipo.',
      icon: MessageSquare,
      color: '#10B981'
    },
    {
      name: 'Trabajo en equipo',
      description: 'Habilidad para colaborar eficazmente, compartir conocimientos y alcanzar objetivos comunes.',
      icon: Users,
      color: '#3B82F6'
    },
    {
      name: 'Metodologías ágiles',
      description: 'Experiencia en Scrum y metodologías ágiles para gestión eficiente de proyectos.',
      icon: GitBranch,
      color: '#8B5CF6'
    },
    {
      name: 'Pensamiento recursivo',
      description: 'Capacidad de abordar problemas complejos dividiéndolos en componentes más manejables.',
      icon: Code,
      color: '#EC4899'
    },
    {
      name: 'Resolución de problemas',
      description: 'Análisis sistemático y enfoque estructurado para resolver desafíos técnicos.',
      icon: Lightbulb,
      color: '#F59E0B'
    },
    {
      name: 'Adaptabilidad',
      description: 'Flexibilidad para adaptarse a nuevos entornos y tecnologías emergentes.',
      icon: Shuffle,
      color: '#6366F1'
    },
    {
      name: 'Aprendizaje continuo',
      description: 'Compromiso constante con el desarrollo profesional y actualización de conocimientos.',
      icon: GraduationCap,
      color: '#14B8A6'
    },
    {
      name: 'Gestión del tiempo',
      description: 'Organización eficiente de tareas y proyectos para cumplir plazos establecidos.',
      icon: Clock,
      color: '#F472B6'
    }
  ];

  return (
    <section id="habilidades" className="flex items-start px-4 py-12 mt-20">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex flex-col items-start gap-6">
          {/* Título de la sección */}
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