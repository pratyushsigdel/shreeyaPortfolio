import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animate as anime, random } from 'animejs';
import profileImg from '../assets/profile.jpg';
import cvPDF from '../assets/Shreeya_CV.pdf';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
        }
    };

    return (
        <motion.section
            id="home"
            className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 pt-32 pb-24 min-h-screen gap-12 relative z-10 overflow-hidden smooth-gpu"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Left Column: Intro */}
            <div className="flex-1 space-y-6 md:space-y-10 w-full">
                <div className="space-y-2 md:space-y-4">
                    <motion.h2
                        variants={itemVariants}
                        className="text-[#6a6566] text-lg md:text-2xl font-light tracking-[0.3em] uppercase"
                    >
                        Greetings
                    </motion.h2>
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] drop-shadow-sm"
                    >
                        I'm Shreeya <br />
                        <span className="text-[#6a6566] italic">Designer</span>
                    </motion.h1>
                </div>

                <motion.p
                    variants={itemVariants}
                    className="text-[#6a6566] text-xl md:text-3xl font-medium tracking-tight"
                >
                    UI UX Designer & Animation Expert
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl font-light"
                >
                    I craft digital experiences that are not only visually stunning but also deeply intuitive.
                    Merging aesthetics with strategy to build products people love.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-4 md:gap-6 pt-4"
                >
                    <a href={cvPDF} download="Shreeya_Shrestha_CV.pdf" className="w-full sm:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-[#6a6566] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-2xl text-lg md:text-xl font-semibold transition-all duration-300 cursor-pointer shadow-2xl shadow-black/50"
                        >
                            Download CV
                        </motion.button>
                    </a>

                </motion.div>
            </div>

            {/* Right Column: Image */}
            <motion.div
                className="flex-1 flex justify-center items-center relative w-full lg:w-auto"
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            >
                <div className="relative group w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px]">
                    {/* Background Glows */}
                    <div className="absolute -inset-10 bg-[#6a6566] opacity-10 rounded-full blur-[80px] group-hover:opacity-25 transition-opacity duration-1000 animate-pulse"></div>
                    <div className="absolute -inset-20 bg-[#1a1a1a] opacity-5 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                    {/* Image Container */}
                    <motion.div
                        className="relative z-10 overflow-hidden rounded-[2rem] md:rounded-[3rem] border-[3px] border-[#6a6566]/50 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-sm aspect-[4/5] smooth-gpu"
                        animate={{ y: [0, -25, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{
                            scale: 1.02,
                            rotateY: 15,
                            rotateX: -5,
                            boxShadow: "0 0 70px rgba(106, 101, 102, 0.4)"
                        }}
                        style={{ perspective: 1000 }}
                    >
                        <img
                            src={profileImg}
                            alt="Shreeya Profile"
                            className="w-full h-full object-cover brightness-95 contrast-105 group-hover:brightness-110 transition-all duration-500"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>

                    {/* Floating Decorative Badge */}
                    <motion.div
                        className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-[#1a1a1a]/90 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl border border-[#6a6566]/30 shadow-2xl z-20"
                        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <p className="text-white text-base md:text-xl font-bold tracking-tighter">Creative</p>
                        <p className="text-[#6a6566] text-[9px] md:text-xs uppercase tracking-[0.2em] font-black">UI/UX Designer</p>
                    </motion.div>

                    {/* Minimal Floating Element */}
                    <motion.div
                        className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#6a6566] to-transparent rounded-full flex items-center justify-center border border-white/10 shadow-2xl z-20 backdrop-blur-sm"
                        animate={{ y: [0, -20, 0], rotate: 360 }}
                        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
                    >
                        <span className="text-2xl md:text-3xl">✨</span>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Home;

