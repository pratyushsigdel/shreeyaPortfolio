import React from 'react';
import { motion } from 'framer-motion';
import CourseCompletion from '../assets/CourseCompletion.jpg';
import TechFriday from '../assets/TechFriday.pdf';
import TechFridayImage from '../assets/TechFridayImage.png';

const Certifications = () => {
    const certs = [
        {
            title: "UI/UX Design Certification",
            issuer: "Mindrisers Institute of Technology",
            description: "Intensive certification program covering advanced UI design principles, UX research methodologies, and interactive prototyping. Gained expertise in creating user-centered designs for complex digital products.",
            skills: ["User Research", "Wireframing", "Prototyping", "Figma"],
            file: CourseCompletion,
            thumbnail: CourseCompletion,
            type: "image"
        },
        {
            title: "Tech Friday Webinar Host",
            issuer: "Sriyog Consulting",
            description: "Recognition for hosting a live webinar on professional UI/UX design concepts, including Apple's Liquid Glass and Google's Material UI. Demonstrated live Figma prototyping to a professional audience.",
            skills: ["Public Speaking", "UI Concepts", "Material UI", "Liquid Glass"],
            file: TechFriday,
            thumbnail: TechFridayImage,
            type: "pdf"
        }
    ];

    return (
        <section id="certifications" className="py-24 px-6 md:px-16 relative z-10 border-t border-white/5 mx-4 md:mx-8 pt-32 smooth-gpu">
            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#6a6566] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-[#6a6566] text-lg md:text-xl tracking-[0.3em] uppercase mb-4">Recognitions</h2>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white">Certifications.</h3>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {certs.map((cert, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="relative group bg-[#1a1a1a]/40 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] border border-white/5 p-6 md:p-8 shadow-2xl hover:border-[#6a6566]/30 transition-all duration-500 flex flex-col"
                    >
                        {/* Certificate Preview */}
                        <motion.div 
                            className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 cursor-pointer shadow-xl group/img aspect-[4/3] flex items-center justify-center bg-[#0a0a0a] mb-8"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => window.open(cert.file, '_blank')}
                        >
                            <img 
                                src={cert.thumbnail} 
                                alt={cert.title} 
                                className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 transition-opacity duration-700"
                            />
                            
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                <div className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-xs md:text-sm uppercase tracking-widest font-bold text-white shadow-2xl scale-90 group-hover/img:scale-100 transition-transform duration-500">
                                    View {cert.type === "pdf" ? "PDF Document" : "Full Image"}
                                </div>
                            </div>
                        </motion.div>

                        {/* Certificate Details */}
                        <div className="flex-1 flex flex-col">
                            <div className="mb-6">
                                <h4 className="text-2xl font-bold text-white mb-2 leading-tight">{cert.title}</h4>
                                <p className="text-[#6a6566] font-medium">{cert.issuer}</p>
                            </div>

                            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mb-8 flex-1">
                                {cert.description}
                            </p>

                            <div className="space-y-8">
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill, index) => (
                                        <span 
                                            key={index} 
                                            className="px-3 py-1 bg-[#1a1a1a] rounded-full text-[10px] text-gray-500 border border-white/5 tracking-wider uppercase font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open(cert.file, '_blank')}
                                    className="w-full inline-flex items-center justify-center gap-3 text-white px-8 py-4 bg-[#6a6566] rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-xl font-bold"
                                >
                                    <span>{cert.type === "pdf" ? "Open PDF Document" : "View Full Document"}</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6a6566] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity pointer-events-none"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
