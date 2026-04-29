import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animate as anime, random } from 'animejs';
import profileImg from '../assets/profile.png';
import cvPDF from '../assets/Shreeya_CV.pdf';

const Home = () => {
    const backgroundRef = useRef(null);

    useEffect(() => {
        const numParticles = 80;
        const container = backgroundRef.current;

        if (!container) return;

        container.innerHTML = ''; // Clear any existing particles

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('anime-particle');

            // Random properties for particles
            const size = Math.random() * 6 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = Math.random() > 0.5 ? '#6a6566' : 'rgba(255,255,255,0.8)';
            particle.style.position = 'absolute';
            particle.style.borderRadius = '50%';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
            particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(255,255,255,0.2)`;

            container.appendChild(particle);
        }

        // Anime.js animation for floating particles
        anime('.anime-particle', {
            translateX: () => random(-150, 150),
            translateY: () => random(-150, 150),
            scale: () => random(0.5, 2.5),
            duration: () => random(4000, 10000),
            delay: () => random(0, 3000),
            alternate: true,
            loop: true,
            easing: 'easeInOutQuad'
        });

    }, []);

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
            className="flex flex-col md:flex-row items-center justify-between px-16 pt-32 pb-24 min-h-screen gap-12 relative z-10 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background Particles Container */}
            <div ref={backgroundRef} className="absolute inset-0 z-[-1] pointer-events-none" />

            {/* Left Column: Intro */}
            <div className="flex-1 space-y-10">
                <div className="space-y-4">
                    <motion.h2
                        variants={itemVariants}
                        className="text-[#6a6566] text-3xl font-light tracking-[0.3em] uppercase"
                    >
                        Greetings
                    </motion.h2>
                    <motion.h1
                        variants={itemVariants}
                        className="text-8xl md:text-9xl font-bold text-white tracking-tighter leading-[0.9] drop-shadow-sm"
                    >
                        I'm Shreeya <br />
                        <span className="text-[#6a6566] italic">Designer</span>
                    </motion.h1>
                </div>

                <motion.p
                    variants={itemVariants}
                    className="text-[#6a6566] text-4xl font-medium tracking-tight"
                >
                    UI UX Designer & Animation Expert
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 text-xl leading-relaxed max-w-2xl font-light"
                >
                    I craft digital experiences that are not only visually stunning but also deeply intuitive.
                    Merging aesthetics with strategy to build products people love.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-6 pt-4"
                >
                    <a href={cvPDF} download="Shreeya_Shrestha_CV.pdf">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#6a6566] text-white px-12 py-5 rounded-2xl text-2xl font-semibold transition-all duration-300 cursor-pointer shadow-2xl shadow-black/50"
                        >
                            Download CV
                        </motion.button>
                    </a>
                    <motion.button
                        whileHover={{ scale: 1.05, borderColor: "#ffffff" }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-[#6a6566] text-white px-12 py-5 rounded-2xl text-2xl font-semibold transition-all duration-300 cursor-pointer backdrop-blur-sm"
                    >
                        My Portfolio
                    </motion.button>
                </motion.div>
            </div>

            {/* Right Column: Image */}
            <motion.div
                className="flex-1 flex justify-center items-center relative"
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            >
                <div className="relative group">
                    {/* Background Glows */}
                    <div className="absolute -inset-10 bg-[#6a6566] opacity-10 rounded-full blur-[80px] group-hover:opacity-25 transition-opacity duration-1000 animate-pulse"></div>
                    <div className="absolute -inset-20 bg-[#1a1a1a] opacity-5 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                    {/* Image Container */}
                    <motion.div
                        className="relative z-10 overflow-hidden rounded-[3rem] border-[3px] border-[#6a6566]/50 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-sm"
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
                            className="w-[450px] h-[580px] object-cover brightness-95 contrast-105 group-hover:brightness-110 transition-all duration-500"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>

                    {/* Floating Decorative Badge */}
                    <motion.div
                        className="absolute -bottom-8 -left-8 bg-[#1a1a1a]/90 backdrop-blur-md p-8 rounded-3xl border border-[#6a6566]/30 shadow-2xl z-20"
                        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <p className="text-white text-2xl font-bold tracking-tighter">Creative</p>
                        <p className="text-[#6a6566] text-sm uppercase tracking-[0.2em] font-black">UI/UX Designer</p>
                    </motion.div>

                    {/* Minimal Floating Element */}
                    <motion.div
                        className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-[#6a6566] to-transparent rounded-full flex items-center justify-center border border-white/10 shadow-2xl z-20 backdrop-blur-sm"
                        animate={{ y: [0, -20, 0], rotate: 360 }}
                        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
                    >
                        <span className="text-3xl">✨</span>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Home;

