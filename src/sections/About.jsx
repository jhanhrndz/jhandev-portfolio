import profileImage from "../assets/foto.jpeg";
import { HeyIcon, Mail, Linkedin, Github, Download } from '../components/PlatformIcons';
import { personalInfo } from '../data/PersonalInfoData';
import SocialLink from '../components/SocialLink';

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
                                className="w-14 h-14 rounded-full object-cover relative border-2 border-gray-100/80 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                            />
                        </div>
                        <span className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm text-green-400 rounded-full text-sm font-medium">
                            {personalInfo.title}
                        </span>
                    </div>

                    <div className="text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
                                Hi <HeyIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 inline-block" />
                                <span className='pr-2'>, I&#39;m</span>
                                <span className="text-blue-400">{personalInfo.shortName}</span>
                            </div>
                        </h1>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-lg text-gray-400 leading-relaxed text-left">
                            <span className="text-gray-300">{personalInfo.studyStatus}</span>{' and '}
                            <span className="text-emerald-400">{personalInfo.devStatus}</span>{' '}
                            from <span className="text-gray-300">{personalInfo.location}</span>{' '}
                            {personalInfo.tagline}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-2">
                        <SocialLink href={`mailto:${personalInfo.emails.about}`} icon={Mail}>
                            Contact me
                        </SocialLink>
                        <SocialLink href={personalInfo.socials.linkedin} icon={Linkedin}>
                            LinkedIn
                        </SocialLink>
                        <SocialLink href={personalInfo.socials.github} icon={Github}>
                            GitHub
                        </SocialLink>
                        <SocialLink href={personalInfo.cvUrl} icon={Download}>
                            CV
                        </SocialLink>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;