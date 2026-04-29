import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { animate as anime } from 'animejs';

const Projects = () => {
    const projects = [
        {
            title: "Attendance Management System",
            type: "SaaS Web & Mobile",
            desc: "Enterprise HRMS workforce management platform for attendance, leave, payroll, and employee operations.",
            tags: ["High-Fidelity UI", "User flows", "Prototyping", "Design Systems"],
            links: [{ label: "View Case Study", url: "https://www.behance.net/gallery/247918355/Attendance-Management-System-%28HRMS%29" }, { label: "View Design In Figma", url: "https://www.figma.com/design/PHUu7yCVqMLMftKWdrx8aX/UI-UX-projects~~~~~~?node-id=12100-62274&t=aC4ooyrPpDQSZUpt-0" }],
            featured: true
        },


        {
            title: "Parking Management System",
            type: "Web Dashboard & App",
            desc: "Web-based and mobile apps designed for guard-level entry, QR billing, revenue monitoring, and admin control.",
            tags: ["Admin Dashboard", "Super Admin", "Mobile POS"],
            links: [{ label: "View Prototype", url: "https://www.figma.com/proto/PHUu7yCVqMLMftKWdrx8aX/UI-UX-projects~~~~~~?node-id=12163-111941&t=RtCopY4vWgTxxfGF-0&scaling=min-zoom&content-scaling=fixed&page-id=939%3A7182&starting-point-node-id=3943%3A10748&show-proto-sidebar=1" }, { label: "View Design In Figma", url: "https://www.figma.com/design/PHUu7yCVqMLMftKWdrx8aX/UI-UX-projects~~~~~~?node-id=12163-111941&t=buYdE6Du0d59DCr4-0" }],
            featured: true
        },
        {
            title: "Guthi Sansthan Portal",
            type: "Web & Mobile Platforms",
            desc: "Informational website and attendance system to showcase property details, heritage services, and public notices.",
            tags: ["Responsive Web", "Mobile App", "Accessible UI"],
            links: [{ label: "View Prototype", url: "https://www.figma.com/proto/PHUu7yCVqMLMftKWdrx8aX/UI-UX-projects~~~~~~?node-id=12130-139680&t=RtCopY4vWgTxxfGF-0&scaling=min-zoom&content-scaling=fixed&page-id=939%3A7182&starting-point-node-id=3943%3A10748" }, { label: "View Design In Figma", url: "https://www.figma.com/design/PHUu7yCVqMLMftKWdrx8aX/UI-UX-projects~~~~~~?node-id=12130-139680&t=SJ56yFqwlZYTCDrZ-0" }],
        },
        {
            title: "Badapatra Digital Display",
            type: "Monitor Screen Design",
            desc: "Clean, high-visibility notice board for public monitors, presenting official announcements with clear hierarchy.",
            tags: ["Single Layout", "Public Monitor", "Typography"],
            links: [{ label: "View Prototype", url: "https://www.figma.com/proto/PHUu7yCVqMLMftKWdrx8aX/UI-UX-projects~~~~~~?node-id=12130-207305&t=RtCopY4vWgTxxfGF-0&scaling=min-zoom&content-scaling=fixed&page-id=939%3A7182&starting-point-node-id=3943%3A10748" }, {label: "View Design In Figma", url: "https://www.figma.com/proto/PHUu7yCVqMLMftKWdrx8aX/UI-UX-projects~~~~~~?node-id=12130-207305&t=RtCopY4vWgTxxfGF-0&scaling=min-zoom&content-scaling=fixed&page-id=939%3A7182&starting-point-node-id=3943%3A10748"}],
        },
        {
            title: "Xpress Sewa",
            type: "Home-Based Service Booking",
            desc: "Delivered complete wireframes, mockups, and interactive prototypes for a home-service booking website.",
            tags: ["Wireframes", "Internship", "UI Design"],
            links: [{ label: "View Case Study", url: "https://www.behance.net/gallery/232097233/Xpress-Sewa-Website-Case-Study" }, { label: "View Design In Figma", url: "https://www.figma.com/design/PHUu7yCVqMLMftKWdrx8aX/UI-UX-projects~~~~~~?node-id=12163-138275&t=H2DSQLdQdJB1uXzw-0" }],
        },
        {
            title: "BiratInfo News App",
            type: "Nepali News Application",
            desc: "Designed a modern, user-friendly UI focused on readability and intuitive navigation.",
            tags: ["Mobile App", "Readability", "Internship"],
            links: [{ label: "View Prototype", url: "https://www.figma.com/proto/PHUu7yCVqMLMftKWdrx8aX/UI-UX-projects~~~~~~?node-id=12163-160573&t=RtCopY4vWgTxxfGF-0&scaling=scale-down&content-scaling=fixed&page-id=930%3A7145&starting-point-node-id=2884%3A39911" }, { label: "View Design In Figma", url: "https://www.figma.com/design/PHUu7yCVqMLMftKWdrx8aX/UI-UX-projects~~~~~~?node-id=12163-161428&t=Vfnc69RY9dCxq2PB-0" }],
        }
    ];

    const handleMouseEnter = (e) => {
        anime(e.currentTarget, {
            translateY: -10,
            scale: 1.02,
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            duration: 400,
            easing: 'easeOutExpo'
        });
    };

    const handleMouseLeave = (e) => {
        anime(e.currentTarget, {
            translateY: 0,
            scale: 1,
            boxShadow: '0 0px 0px rgba(0,0,0,0)',
            duration: 400,
            easing: 'easeOutExpo'
        });
    };

    return (
        <section id="projects" className="py-24 px-6 md:px-16 min-h-screen relative z-10 mx-4 md:mx-8 border-t border-white/5 pt-32 smooth-gpu">
            <div className="max-w-7xl mx-auto mb-16 md:flex justify-between items-end">
                <div>
                    <h2 className="text-[#6a6566] text-xl md:text-2xl tracking-[0.3em] uppercase mb-4">Portfolio</h2>
                    <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white">Selected Works.</h3>
                </div>
                <p className="max-w-md text-gray-400 font-light text-base md:text-lg mt-6 md:mt-0 pb-2">
                    A collection of scalable systems, complex dashboards, and responsive platforms designed with usability at the core.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={`group relative bg-[#1a1a1a]/60 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-white/5 hover:border-[#6a6566]/60 transition-colors duration-500 overflow-hidden flex flex-col justify-between ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6a6566]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div>
                            <div className="mb-4 md:mb-6 flex flex-wrap gap-2">
                                {project.tags.slice(0, 2).map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[10px] md:text-xs text-[#b392ac] font-medium tracking-wide uppercase border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{project.title}</h4>
                            <p className="text-[#6a6566] font-medium mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-sm">{project.type}</p>

                            <p className="text-gray-400 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                                {project.desc}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 mt-auto relative z-10 w-full">
                            {project.links.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 text-center ${i === 0
                                            ? "bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/5"
                                            : "bg-transparent border border-white/20 text-white hover:border-[#6a6566] hover:bg-white/5"
                                        }`}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Webinar Highlight */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto mt-12 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-[#6a6566]/30 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden"
            >
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] leading-none opacity-[0.03] font-black select-none pointer-events-none">
                    LIVE
                </div>

                <div className="max-w-2xl relative z-10">
                    <div className="inline-block px-4 py-1.5 bg-[#6a6566]/20 rounded-full text-[#b392ac] font-bold tracking-widest uppercase text-[10px] md:text-xs mb-6 border border-[#6a6566]/30">
                        Speaker Experience
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Friday Webinar Host</h3>
                    <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-0">
                        Hosted a live webinar on professional UI/UX design concepts for Sriyog Consulting. Demonstrated Apple's Liquid Glass and Google's Material UI, complete with live Figma prototyping of a cosmetic product app.
                    </p>
                </div>
                <div className="mt-8 md:mt-0 relative z-10 flex-shrink-0">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="https://drive.google.com/file/d/1YEYpU62sfvZaFTgEe2FvI4A1EIt_mGnr/view"
                        target="_blank"
                        className="w-20 h-20 md:w-24 md:h-24 bg-[#6a6566] rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-black border-4 border-[#0a0a0a] shadow-[0_0_30px_rgba(106,101,102,0.5)] cursor-pointer"
                    >
                        ↗
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
