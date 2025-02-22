import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import profileImage from "../assets/foto.jpeg";

const HeyIcon = ({ className = "", width = "40", height = "40" }) => {
    return (
        <svg
            className={`${className} animate-waving-hand inline-block`}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            trigger="hover"
            viewBox="6.373176574707031 6.428000450134277 35.2536506652832 35.143978118896484"
            enable-background="new 0 0 48 48"
        >
            <g>
                <g>

                    <path fill="#FFFFFF" stroke="#536DFE" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="    M27.92472,40.46203c4.28714-1.74004,6.81433-4.8108,7.04363-11.05413c0.14227-3.87377,0.92656-4.60124,1.9721-7.91212    c1.17563-3.72284-3.33096-3.88612-4.89847-1.43688c-0.78797,1.2312-1.83418,4.06745-1.83418,4.06745    s-2.26074-8.9119-2.80602-11.06425c-0.54528-2.15235-1.24997-3.47788-2.97034-2.86424    c-1.55976,0.55635-1.31781,2.65164-1.31781,2.65164s-0.78256-2.88585-1.19715-4.22778s-1.77153-2.0623-2.91774-1.50264    s-1.472,1.74527-1.15684,3.2454s0.51276,2.48501,0.51276,2.48501s-0.78961-3.14709-2.92286-2.53131    c-3.30682,0.95455,0.04886,9.67695,0.04886,9.67695s-0.65145-2.49153-2.17281-2.38778    c-2.88264,0.19659-2.13475,4.80144-1.07688,7.87885c1.95889,5.69853,3.19358,7.71973,4.72355,9.96833    C19.95455,39.86364,24.12678,42.00352,27.92472,40.46203z" />

                    <line fill="currentColor" stroke="#536DFE" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="23.11364" y1="12.84949" x2="25.02273" y2="20.22727" />

                    <line fill="currentColor" stroke="#536DFE" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="18.35468" y1="12.84949" x2="21.20455" y2="22.47727" />

                    <line fill="currentColor" stroke="#536DFE" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="15.4621" y1="19.90004" x2="17.1324" y2="25.2641" />
                    <path fill="currentColor" stroke="#536DFE" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="    M25.31824,29.90191c0,0,0.08256-1.93422,1.95436-3.87399c1.53828-1.59414,2.9352-1.90158,2.9352-1.90158" />
                </g>
            </g>
            <g>
                <g>
                    <path fill="currentColor" stroke="#2EE676FF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="    M33.69743,10.48791c1.11016,0.11809,2.17709,0.66659,2.9314,1.60757c0.75431,0.94097,1.05754,2.10167,0.93127,3.21094" />
                    <path fill="currentColor" stroke="#2EE676FF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="    M41.0858,14.64671c0.19204-1.78173-0.28749-3.6374-1.49367-5.14205c-1.20617-1.50465-2.90941-2.37188-4.69024-2.57211    l-0.00364-0.00455" />
                </g>
                <g>
                    <path fill="currentColor" stroke="#2EE676FF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="    M14.30257,37.51208c-1.11017-0.11809-2.17709-0.6666-2.9314-1.60757c-0.75431-0.94097-1.05754-2.10167-0.93126-3.21093" />
                    <path fill="currentColor" stroke="#2EE676FF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="    M6.9142,33.35329c-0.19203,1.78173,0.2875,3.6374,1.49367,5.14204s2.90941,2.37189,4.69024,2.57211l0.00364,0.00454" />
                </g>
            </g>
        </svg>
    );
};

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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                                Hi <HeyIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 inline-block" />
                                <span className='pr-2'>, I'm</span>
                                <span className="text-blue-400">Jhan Hernandez</span>
                            </div>
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