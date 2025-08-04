import { useState } from 'react';
import kaggleIcon from "../assets/icons/kaggleIcon-gray.svg";
import { Mail, MapPin, Copy, CheckCircle, Send, MessageCircleMore, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const contactInfo = {
        email: "jhandev1022@gmail.com",
        whatsapp: "+57 300 7011750"
    };

    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(contactInfo.email);
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
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed text-left"> Feel free to reach out to me if you&#39;re looking for a developer, have any questions, or just want to connect. </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                        <div className="p-6 bg-gray-800/30 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                                    <p className="text-gray-300">{contactInfo.email}</p>
                                    <div className="flex gap-3 mt-4">
                                        <a
                                            href={`mailto:${contactInfo.email}`}
                                            className="flex-1 px-2 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-xs font-medium flex items-center justify-center gap-2"
                                        >
                                            <Send className="w-4 h-4" />
                                            Send mail
                                        </a>
                                        <div className="group relative flex-1">
                                            <button
                                                onClick={handleCopyEmail}
                                                className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2"
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

                        <div className="p-6 bg-gray-800/30 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                    <MessageCircleMore className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-medium text-white mb-1">WhatsApp</h4>
                                    <p className="text-gray-300">{contactInfo.whatsapp}</p>
                                    <div className="flex gap-3 mt-4">
                                        <a
                                            href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full px-4 py-2 bg-green-600/30 hover:bg-green-600/50 text-green-200 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                                        >
                                            <MessageCircleMore className="w-4 h-4" />
                                            Chat with me
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-6 bg-gray-800/30 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                                <p className="text-gray-300">Barranquilla, Colombia.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-5 border border-gray-600/30 rounded-lg bg-gray-800/20">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-gray-300 text-sm">You can also contact me at:</span>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/jhanhrndz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jhan-carlos-hernández-051aa3301"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.kaggle.com/jhanhernndez"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
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