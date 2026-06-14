import profileImage from "../assets/foto.jpeg";
import { HeyIcon, Mail, Linkedin, Github, Download } from '../components/PlatformIcons';
import { personalInfo } from '../data/PersonalInfoData';
import SocialLink from '../components/SocialLink';

const About = () => {
    return (
        <section id="about-me" className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 mt-16 min-h-[85vh] overflow-hidden">
            {/* Ambient background glow orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] sm:blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[60px] sm:blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl w-full mx-auto relative z-10">
                <div className="flex flex-col items-center gap-8 text-center">
                    
                    {/* Centered Avatar with Glow & Breathing Ring */}
                    <div className="relative group mb-2">
                        {/* Glow background */}
                        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 opacity-30 blur-lg group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        
                        {/* Avatar Image Wrapper */}
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 shadow-xl">
                            <img
                                src={profileImage}
                                alt="Jhan Hernandez Profile"
                                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-zinc-950 bg-zinc-100 dark:bg-zinc-900 transition-transform duration-500 group-hover:scale-102"
                            />
                        </div>
                    </div>

                    {/* Role Title Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-100/80 dark:border-indigo-800/20 backdrop-blur-sm shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse"></span>
                        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                            {personalInfo.title}
                        </span>
                    </div>

                    {/* Hero Title with Gradient Text */}
                    <div className="max-w-4xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                            Hi <HeyIcon className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 inline-block align-middle ml-1 mr-2" />
                            I&#39;m{" "}
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400 drop-shadow-sm">
                                {personalInfo.shortName}
                            </span>
                        </h1>
                    </div>

                    {/* Highly-Readable High-Contrast Description */}
                    <div className="max-w-3xl px-2">
                        <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                            <span className="font-semibold text-zinc-800 dark:text-zinc-200">{personalInfo.studyStatus}</span>{" and "}
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{personalInfo.devStatus}</span>{" "}
                            from <span className="font-semibold text-zinc-800 dark:text-zinc-200">{personalInfo.location}</span>{" "}
                            {personalInfo.tagline}
                        </p>
                    </div>

                    {/* Elegant Button Layout - Primary & Secondary CTAs */}
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <SocialLink href={`mailto:${personalInfo.emails.about}`} icon={Mail} variant="primary-pill">
                            Contact me
                        </SocialLink>
                        <SocialLink href={personalInfo.socials.linkedin} icon={Linkedin} variant="secondary-pill">
                            LinkedIn
                        </SocialLink>
                        <SocialLink href={personalInfo.socials.github} icon={Github} variant="secondary-pill">
                            GitHub
                        </SocialLink>
                        <SocialLink href={personalInfo.cvUrl} icon={Download} variant="secondary-pill">
                            CV
                        </SocialLink>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;