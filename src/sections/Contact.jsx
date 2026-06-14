import { useState } from 'react';
import kaggleIcon from "../assets/icons/kaggleIcon-gray.svg";
import { Mail, MapPin, Copy, CheckCircle, Send, MessageCircleMore, Github, Linkedin } from '../components/PlatformIcons';
import { personalInfo } from '../data/PersonalInfoData';
import SocialLink from '../components/SocialLink';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(personalInfo.emails.contact);
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
    };

    return (
        <section id="contact" className="flex items-start px-4 py-12 mt-20">
            <div className="max-w-3xl w-full mx-auto">
                <div className="flex flex-col items-start gap-6">       
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-b from-blue-400/20 to-blue-500/20 absolute blur-md"></div>
                            <div className="w-14 h-14 rounded-full bg-blue-500/20 relative flex items-center justify-center">
                                <Mail className="w-8 h-8 text-blue-400" />
                            </div>
                        </div>
                        <span className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm text-blue-400 rounded-full text-sm font-medium">
                            Let&#39;s work together
                        </span>
                    </div>
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Get in <span className="text-blue-400">touch</span>
                        </h2>
                    </div>
                    <div className="max-w-2xl">
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed text-left">
                            Feel free to reach out to me if you&#39;re looking for a developer, have any questions, or just want to connect.
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                        {/* Email Card */}
                        <div className="p-6 bg-gray-800/30 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                                    <p className="text-gray-300 text-sm break-all">{personalInfo.emails.contact}</p>
                                    <div className="flex gap-3 mt-4">
                                        <SocialLink href={`mailto:${personalInfo.emails.contact}`} icon={Send} variant="purple-btn">
                                            Send mail
                                        </SocialLink>
                                        <div className="group relative flex-1">
                                            <button
                                                onClick={handleCopyEmail}
                                                className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md"
                                            >
                                                {copied ? (
                                                    <>
                                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                                        Copied!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4" />
                                                        Copy
                                                    </>
                                                )}
                                            </button>
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                                                Click to copy email
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Card */}
                        <div className="p-6 bg-gray-800/30 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <MessageCircleMore className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-medium text-white mb-1">WhatsApp</h4>
                                    <p className="text-gray-300 text-sm">{personalInfo.socials.whatsapp}</p>
                                    <div className="flex gap-3 mt-4">
                                        <SocialLink
                                            href={`https://wa.me/${personalInfo.socials.whatsapp.replace(/\D/g, '')}`}
                                            icon={MessageCircleMore}
                                            variant="green-btn"
                                        >
                                            Chat with me
                                        </SocialLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="w-full p-6 bg-gray-800/30 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                                <p className="text-gray-300 text-sm">{personalInfo.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Social Links Footer */}
                    <div className="w-full p-5 border border-gray-600/30 rounded-lg bg-gray-800/20">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-gray-300 text-sm">You can also contact me at:</span>
                            <div className="flex items-center gap-4">
                                <SocialLink href={personalInfo.socials.github} icon={Github} variant="circle" />
                                <SocialLink href={personalInfo.socials.linkedin} icon={Linkedin} variant="circle" />
                                <a
                                    href={personalInfo.socials.kaggle}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 bg-gray-700/50 hover:bg-gray-600/50 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                                >
                                    <img src={kaggleIcon} alt="Kaggle Logo" className="size-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;