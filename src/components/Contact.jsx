import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animate as anime } from 'animejs';

const Contact = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            anime(buttonRef.current, {
                scale: [1, 1.05],
                boxShadow: ['0 0 20px rgba(255,255,255,0.2)', '0 0 40px rgba(255,255,255,0.6)'],
                duration: 1500,
                alternate: true,
                loop: true,
                easing: 'easeInOutSine'
            });
        }
    }, []);

    return (
        <section id="contact" className="pt-24 md:pt-32 pb-12 px-6 md:px-16 relative z-10 mx-4 md:mx-8 border-t border-white/5 mt-32 bg-gradient-to-b from-transparent to-[#1a1a1a]/30 rounded-t-[2rem] md:rounded-t-[4rem] smooth-gpu">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#6a6566] opacity-10 blur-[150px] pointer-events-none rounded-t-[100%]"></div>
            
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10 mb-16 md:mb-24">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-tight"
                >
                    Let's Build Something<br/>
                    <span className="text-[#6a6566] italic font-serif">Extraordinary.</span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mb-8 md:mb-12"
                >
                    Whether you have an upcoming SaaS project, need a UI revamp, or just want to discuss design principles, I'd love to hear from you.
                </motion.p>

                <motion.a 
                    ref={buttonRef}
                    href="mailto:shreeya.shrestha7276@gmail.com"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-8 md:px-12 py-4 md:py-6 bg-white text-black rounded-full text-lg md:text-2xl font-bold hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] mb-12 md:mb-20 break-all sm:break-normal"
                >
                    shreeya.shrestha7276@gmail.com
                </motion.a>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 relative z-10">
                <div className="sm:col-span-2">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full text-white text-2xl md:text-3xl bg-[#6a6566] border-2 border-[#1a1a1a] flex items-center justify-center font-bold mb-6">
                        SS
                    </div>
                    <p className="text-gray-400 text-base md:text-lg font-light max-w-sm">
                        UI/UX Designer specializing in multi-role SaaS platforms and intuitive digital experiences.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6 uppercase tracking-widest">Connect</h4>
                    <ul className="space-y-3 md:space-y-4">
                        <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all block text-sm md:text-base">LinkedIn</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all block text-sm md:text-base">Behance</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all block text-sm md:text-base">Personal Website</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6 uppercase tracking-widest">Contact Info</h4>
                    <ul className="space-y-3 md:space-y-4">
                        <li className="text-gray-400 text-sm md:text-base">+977-9869727650</li>
                        <li className="text-gray-400 text-sm md:text-base">Naikap, Kathmandu</li>
                        <li className="text-gray-400 text-sm md:text-base">Nepal</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 md:mt-24 text-center text-gray-500 text-xs md:text-sm font-light relative z-10 pb-8">
                &copy; {new Date().getFullYear()} Shreeya Shrestha. All Rights Reserved. Designed with precision.
            </div>
        </section>
    );
};

export default Contact;
