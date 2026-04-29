import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { animate as anime, stagger } from 'animejs';

const Skills = () => {
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView && gridRef.current) {
            const badges = gridRef.current.querySelectorAll('.skill-badge');
            
            anime(badges, {
                scale: [0, 1],
                opacity: [0, 1],
                delay: stagger(100, {grid: [14, 5], from: 'center'}),
                duration: 1500,
                easing: 'easeOutElastic(1, .6)'
            });
        }
    }, [isInView]);

    const techSkills = [
        "UI/UX Design", "Wireframing & Prototyping", "Responsive Design", 
        "User Research", "User Flows & Site Mapping", "Empathy Mapping", 
        "Usability Testing", "Usability Principles", "SEO Content Writing", 
        "Logo & Template Design", "Project Management", "Photo & Video Editing"
    ];

    const software = [
        "Figma", "FigJam", "Framer", "Notion", "Canva", 
        "Adobe Photoshop", "Adobe Illustrator", "Capcut", 
        "Visual Studio", "WordPress", "MS-Office"
    ];

    const softSkills = [
        "Communication", "Leadership", "Problem Solving", "Critical Thinking", 
        "Adaptability", "Team Work", "Collaboration", "Research", "Time Management"
    ];

    const BadgeCategory = ({ title, skills, index }) => (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#1a1a1a]/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/5 hover:border-[#6a6566]/30 transition-colors duration-500 shadow-2xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#6a6566] opacity-10 rounded-full blur-[50px]"></div>
            <h4 className="text-3xl font-semibold mb-8 text-white tracking-tight">{title}</h4>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="skill-badge px-6 py-3 bg-[#0a0a0a]/80 border border-white/10 rounded-full text-gray-300 font-medium text-lg shadow-sm hover:border-[#6a6566] hover:text-white transition-colors cursor-default opacity-0"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section id="skills" className="py-24 px-8 md:px-16 min-h-screen relative z-10 mx-8 border-t border-white/5 pt-32">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-[#6a6566] text-2xl tracking-[0.3em] uppercase mb-4">Competencies</h2>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">Skills & Tools.</h3>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {/* Tech Skills takes up a bit more visual weight so it can span */}
                <div className="md:col-span-2">
                    <BadgeCategory title="Technical Disciplines" skills={techSkills} index={0} />
                </div>
                <div>
                    <BadgeCategory title="Software Expertise" skills={software} index={1} />
                </div>
                <div>
                    <BadgeCategory title="Soft Skills" skills={softSkills} index={2} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
