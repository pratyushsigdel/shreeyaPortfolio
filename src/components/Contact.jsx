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
        <section id="contact" className="pt-32 pb-12 px-8 md:px-16 relative z-10 mx-8 border-t border-white/5 mt-32 bg-gradient-to-b from-transparent to-[#1a1a1a]/30 rounded-t-[4rem]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#6a6566] opacity-10 blur-[150px] pointer-events-none rounded-t-[100%]"></div>
            
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10 mb-24">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-tight"
                >
                    Let's Build Something<br/>
                    <span className="text-[#6a6566] italic font-serif">Extraordinary.</span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 font-light max-w-2xl mb-12"
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
                    className="inline-block px-12 py-6 bg-white text-black rounded-full text-2xl font-bold hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] mb-20"
                >
                    shreeya.shrestha7276@gmail.com
                </motion.a>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 relative z-10">
                <div className="md:col-span-2">
                    <div className="w-16 h-16 rounded-full text-white text-3xl bg-[#6a6566] border-2 border-[#1a1a1a] flex items-center justify-center font-bold mb-6">
                        SS
                    </div>
                    <p className="text-gray-400 text-lg font-light max-w-sm">
                        UI/UX Designer specializing in multi-role SaaS platforms and intuitive digital experiences.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Connect</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all block">LinkedIn</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all block">Behance</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all block">Personal Website</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Contact Info</h4>
                    <ul className="space-y-4">
                        <li className="text-gray-400">+977-9869727650</li>
                        <li className="text-gray-400">Naikap, Kathmandu</li>
                        <li className="text-gray-400">Nepal</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 text-center text-gray-500 text-sm font-light relative z-10 pb-8">
                &copy; {new Date().getFullYear()} Shreeya Shrestha. All Rights Reserved. Designed with precision.
            </div>
        </section>
    );
};

export default Contact;
