import React from 'react';
import { motion } from 'framer-motion';
import graphic1 from '../assets/graphic1.jpg';
import graphic2 from '../assets/graphic2.jpg';
import graphic3 from '../assets/graphic3.jpg';
import graphic4 from '../assets/graphic4.jpg';

const GraphicDesign = () => {
    const designs = [
        { image: graphic1 },
        { image: graphic2 },
        { image: graphic3 },
        { image: graphic4 }
    ];

    return (
        <section id="graphic-design" className="py-24 px-6 md:px-16 relative z-10 border-t border-white/5 mx-4 md:mx-8 pt-32 smooth-gpu">
            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#6a6566] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-[#6a6566] text-lg md:text-xl tracking-[0.3em] uppercase mb-4">Creative Works</h2>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white">Graphic Design.</h3>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 space-y-5">
                {designs.map((design, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl cursor-pointer"
                        onClick={() => window.open(design.image, '_blank')}
                    >
                        {/* Image */}
                        <motion.img 
                            src={design.image}
                            alt={`Design ${index + 1}`}
                            className="w-full h-full object-cover aspect-[4/3]"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                            <div className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-xs md:text-sm uppercase tracking-widest font-bold text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                View Full Design
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default GraphicDesign;