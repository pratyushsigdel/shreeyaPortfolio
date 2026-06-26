import React from "react";
import { motion } from "framer-motion";
import graphic1 from "../assets/graphic1.jpg";
import graphic2 from "../assets/graphic2.jpg";
import graphic3 from "../assets/graphic3.jpg";
import graphic4 from "../assets/graphic4.jpg";

const GraphicDesign = () => {
  const designs = [
    { image: graphic1, aspect: "aspect-[4/3]" },
    { image: graphic2, aspect: "aspect-[4/3]" },
    { image: graphic3, aspect: "aspect-[4/3]" }, 
    { image: graphic4, aspect: "aspect-[4/3]" }
  ];

  const figmaLink = "https://www.figma.com/proto/PHUu7yCVqMLMftKWdrx8aX/UI-UX-Projects?node-id=12465-44406&t=TmB9dC9pLaGP8eSE-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12465%3A44016";

  return (
    <section
      id="graphicdesigns"
      className="py-24 px-6 md:px-16 relative z-10 border-t border-white/5 mx-4 md:mx-8 pt-32 smooth-gpu"
    >
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#6a6566] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-[#6a6566] text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
          Creative Works
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white">
          Design & Motion.
        </h3>
      </div>

      {/* Graphic Design Subsection */}
      <div className="max-w-7xl mx-auto mb-24">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-base md:text-lg tracking-[0.2em] uppercase mb-8 font-semibold"
        >
          Graphic Design
        </motion.h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl cursor-pointer"
              onClick={() => window.open(design.image, "_blank")}
            >
              {/* Image */}
              <motion.img 
                src={design.image}
                alt={`Design ${index + 1}`}
                className={`w-full h-full object-cover ${design.aspect}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-xs md:text-sm uppercase tracking-widest font-bold text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Full Design
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Motion Design Subsection */}
      <div className="max-w-7xl mx-auto">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-base md:text-lg tracking-[0.2em] uppercase mb-8 font-semibold"
        >
          Motion Design
        </motion.h4>
        <motion.a
          href={figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl cursor-pointer bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center block aspect-video md:aspect-[16/9]"
          whileHover={{ scale: 1.02 }}
          style={{
            backgroundImage: `url(${graphic2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h5 className="text-xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Interactive Prototype
            </h5>
            <p className="text-white/70 text-sm md:text-base tracking-wide mb-6">
              Click to explore the motion design experience
            </p>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-xs md:text-sm uppercase tracking-widest font-bold text-white shadow-2xl inline-flex items-center gap-2 group-hover:bg-white/20 transition-colors duration-300">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Prototype
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
        </motion.a>
      </div>
    </section>
  );
};

export default GraphicDesign;