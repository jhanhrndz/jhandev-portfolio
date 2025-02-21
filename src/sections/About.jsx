import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import profileImage from "../assets/foto.jpeg";

const About = () => {
    return (
        <section id="about-me" className="flex items-start px-4 py-12 mt-20">
            <div className="max-w-3xl w-full mx-auto">
                <div className="flex flex-col items-start gap-6">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 absolute blur-md"></div>
                            <img
                                src={profileImage}
                                alt="Foto de perfil"
                                className="w-14 h-14 rounded-full object-cover relative border-2 border-gray-100/80"
                                style={{
                                    boxShadow: '0 0 20px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                        <span className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm text-green-400 rounded-full text-sm font-medium"> Systems Engineer </span>
                    </div>

                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Hi, I'm <span className="text-blue-400">Jhan Hernandez</span>
                        </h1>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-lg text-gray-400 leading-relaxed text-left">
                            <span className="text-gray-300">Systems Engineering student</span>{' and '}
                            <span className="text-emerald-400">full-stack software developer</span>{' '}
                            from <span className="text-gray-300">Barranquilla, Colombia.</span>{' '}
                            Passionate about technology, continuous learning, and creating solutions with real impact.
                        </p>
                    </div>

                    <div className="flex gap-3 mt-2">
                        <a
                            href="mailto:jhancarlosh134@email.com"
                            className="flex items-center gap-2 px-4 py-2 max-sm:px-3 max-sm:py-1 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors text-sm max-sm:text-[10px]"
                        >
                            <Mail size={16} className="max-sm:w-4 max-sm:h-4" />
                            Contact me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jhan-carlos-hernández-051aa3301"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 max-sm:px-3 max-sm:py-1 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors text-sm max-sm:text-[10px]"
                        >
                            <Linkedin size={16} className="max-sm:w-4 max-sm:h-4" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/jhanhrndz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 max-sm:px-3 max-sm:py-1 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors text-sm max-sm:text-[10px]"
                        >
                            <Github size={16} className="max-sm:w-4 max-sm:h-4" />
                            GitHub
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;