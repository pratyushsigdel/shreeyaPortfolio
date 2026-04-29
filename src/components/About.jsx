import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { animate as anime, stagger } from 'animejs';

const About = () => {
    const timelineRef = useRef(null);
    const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView && timelineRef.current) {
            const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
            
            anime(timelineItems, {
                translateX: [50, 0],
                opacity: [0, 1],
                delay: stagger(200, {start: 500}), // stagger delay
                duration: 800,
                easing: 'easeOutElastic(1, .8)'
            });
            
            // Animate the vertical line
            const verticalLine = timelineRef.current.querySelector('.timeline-line');
            if (verticalLine) {
                 anime(verticalLine, {
                    height: ['0%', '100%'],
                    duration: 1500,
                    easing: 'easeInOutQuad'
                });
            }
        }
    }, [isInView]);

  return (
    <section id="about" className="py-24 px-16 min-h-screen flex items-center relative z-10 flex-col md:flex-row gap-16 text-white border-t border-white/5 mx-8 mt-12 pt-32">
      {/* Left Text */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-8"
      >
        <div>
            <h2 className="text-[#6a6566] text-2xl tracking-[0.3em] uppercase mb-4">About Me</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">My Journey.</h3>
        </div>
        
        <p className="text-gray-400 text-xl leading-relaxed font-light max-w-2xl">
          I am a specialized UI/UX Designer with deep experience designing scalable SaaS platforms, complex dashboards, and responsive applications. My goal is to simplify workflows across multiple roles without compromising aesthetics.
        </p>
        
        <p className="text-gray-400 text-xl leading-relaxed font-light max-w-2xl">
          Beyond wireframing and prototyping in Figma, I possess strong capabilities in user research, empathy mapping, and transforming complex business requirements into intuitive solutions. 
        </p>

        <div className="flex gap-6 mt-8">
            <div className="bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 w-48 text-center hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-[#6a6566] text-4xl font-bold mb-2">20+</h4>
                <p className="text-sm tracking-widest text-gray-400 uppercase">Projects</p>
            </div>
            <div className="bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 w-48 text-center hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-[#6a6566] text-4xl font-bold mb-2">3</h4>
                <p className="text-sm tracking-widest text-gray-400 uppercase">Languages</p>
            </div>
        </div>
      </motion.div>

      {/* Right Education Column */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        <div className="bg-[#1a1a1a]/50 backdrop-blur-md p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6a6566] opacity-10 rounded-full blur-[80px]"></div>
            
            <h3 className="text-3xl font-semibold mb-10 tracking-tight">Education <span className="text-[#6a6566]">& Courses</span></h3>
            
            <div ref={timelineRef} className="space-y-8 relative">
                {/* Vertical Line Container */}
                <div className="absolute inset-0 ml-2 md:mx-auto md:translate-x-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent">
                    {/* Animated Line Fill */}
                    <div className="timeline-line w-full bg-[#6a6566] h-0 origin-top"></div>
                </div>
                
                {/* Item 1 */}
                <div className="timeline-item opacity-0 relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#0a0a0a] bg-[#6a6566] group-hover:scale-125 transition duration-300 md:absolute md:left-1/2 md:-translate-x-1/2 md:-ml-0.5 relative z-10"></div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl shadow border border-white/10 bg-[#0a0a0a]/50 hover:border-[#6a6566]/50 transition-colors">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-white text-lg">BSc (Hons) Computing</div>
                            <time className="font-medium text-[#6a6566] text-sm">2019 - 2023</time>
                        </div>
                        <div className="text-gray-400 text-sm">Islington College (First Class Honors)</div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="timeline-item opacity-0 relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#0a0a0a] bg-gray-500 group-hover:scale-125 transition duration-300 md:absolute md:left-1/2 md:-translate-x-1/2 md:-ml-0.5 group-hover:bg-[#6a6566] relative z-10"></div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl shadow border border-white/10 bg-[#0a0a0a]/50 hover:border-[#6a6566]/50 transition-colors">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-white text-lg">UI/UX Design Certification</div>
                            <time className="font-medium text-[#6a6566] text-sm">Nov 2024 - Feb 2025</time>
                        </div>
                        <div className="text-gray-400 text-sm">Mindrisers Institute of Technology</div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="timeline-item opacity-0 relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#0a0a0a] bg-gray-600 group-hover:scale-125 transition duration-300 md:absolute md:left-1/2 md:-translate-x-1/2 md:-ml-0.5 group-hover:bg-[#6a6566] relative z-10"></div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl shadow border border-white/10 bg-[#0a0a0a]/50 hover:border-[#6a6566]/50 transition-colors">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-white text-lg">A-Levels Science</div>
                            <time className="font-medium text-[#6a6566] text-sm">2016 - 2018</time>
                        </div>
                        <div className="text-gray-400 text-sm">Trinity International College</div>
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
