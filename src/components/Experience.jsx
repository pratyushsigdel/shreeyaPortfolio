import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { animate as anime, stagger } from 'animejs';

const Experience = () => {
    const timelineRef = useRef(null);
    const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView && timelineRef.current) {
            const cards = timelineRef.current.querySelectorAll('.experience-card');
            
            anime(cards, {
                translateX: [-50, 0],
                opacity: [0, 1],
                delay: stagger(300, {start: 300}), // stagger delay
                duration: 1000,
                easing: 'easeOutQuart'
            });
            
             // Animate the vertical line
             const verticalLine = timelineRef.current.querySelector('.experience-line');
             if (verticalLine) {
                  anime(verticalLine, {
                     height: ['0%', '100%'],
                     duration: 1500,
                     easing: 'easeInOutQuad'
                 });
             }
        }
    }, [isInView]);

    const experiences = [
        {
            role: "UI/UX Designer",
            company: "Goodwish Engineering Pvt. Ltd.",
            period: "March 2025 – Present",
            description: [
                "Led UI/UX design for multiple SaaS platforms (Parking, Attendance, Restaurant Management Systems) from concept to final delivery.",
                "Designed complex dashboards for multi-role systems (Super Admin, Admin, End Users) across web and mobile.",
                "Focused on usability, accessibility, and efficient user flows to enhance overall product experience.",
                "Worked closely with developers and PM to translate business requirements into user-centered designs."
            ]
        },
        {
            role: "UI/UX Designer Intern",
            company: "Sriyog Consulting",
            period: "May 12 – July 16, 2025",
            description: [
                "Contributed to real-world client projects including Birat Info (Nepali news app) and Xpress Sewa (home service booking).",
                "Applied grid systems and improved user flow and visual consistency.",
                "Delivered complete wireframes, mockups, and interactive prototypes.",
                "Hosted a live webinar on professional UI/UX design concepts including Apple's Liquid Glass and Google's Material UI."
            ]
        },
        {
            role: "SEO Content Writer",
            company: "Hansikar Technologies",
            period: "Oct 2023 - March 2024",
            description: [
                "Created SEO Content on diverse topics for multiple platforms like websites, blogs, articles, and banners.",
                "Used SEO guidelines to increase web traffic.",
                "Collaborated with other departments to create innovative content ideas."
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="experience" className="py-24 px-6 md:px-16 min-h-screen relative z-10 mx-4 md:mx-8 border-t border-white/5 pt-32 smooth-gpu">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-[#6a6566] opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-[#6a6566] text-lg md:text-xl tracking-[0.3em] uppercase mb-4">Work Experience</h2>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white">Career Profile.</h3>
            </div>

            <motion.div 
                ref={timelineRef}
                className="max-w-4xl mx-auto relative border-l-2 border-transparent"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Vertical Line Container */}
                <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-white/10">
                    {/* Animated Line Fill */}
                    <div className="experience-line w-full bg-[#6a6566] h-0 origin-top"></div>
                </div>

                {experiences.map((exp, index) => (
                    <motion.div key={index} variants={itemVariants} className="experience-card mb-12 md:mb-16 relative pl-8 md:pl-10 group opacity-0">
                        <div className="absolute w-5 h-5 md:w-6 md:h-6 bg-[#0a0a0a] rounded-full border-4 border-[#6a6566] -left-[11px] md:-left-[13px] top-2 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(106,101,102,0.8)] z-10"></div>
                        
                        <div className="bg-[#1a1a1a]/60 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-[#6a6566]/50 transition-colors duration-500 shadow-xl group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 border-b border-white/10 pb-4">
                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.role}</h4>
                                    <p className="text-base md:text-lg text-[#b392ac] font-medium">{exp.company}</p>
                                </div>
                                <div className="mt-4 md:mt-0 px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-full text-xs md:text-sm text-gray-400 border border-white/5 md:whitespace-nowrap inline-block w-fit">
                                    {exp.period}
                                </div>
                            </div>
                            
                            <ul className="space-y-3 md:space-y-4">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="flex items-start text-gray-400 font-light leading-relaxed">
                                        <span className="text-[#6a6566] mr-2 md:mr-3 mt-1.5 opacity-60 flex-shrink-0">◆</span>
                                        <span className="text-sm md:text-[15px]">{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;
