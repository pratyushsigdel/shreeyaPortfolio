import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const navbarItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "projects" },
    { title: "Skills", id: "skills" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navbarItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }

      // Check if user hit the bottom of the page
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection("projects");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar
        behavior: "smooth"
      });
      setActiveSection(id);
      setIsMenuOpen(false); // Close menu on click
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const menuVariants = {
    closed: { 
      opacity: 0, 
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between md:justify-around items-center p-4 md:p-6 fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0a0a0a]/50 border-b border-white/5 smooth-gpu"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full text-white text-xl md:text-3xl bg-[#6a6566] border-2 border-white/20 flex items-center justify-center shadow-lg cursor-pointer z-[60]"
          onClick={() => handleScrollTo("home")}
        >
          SS
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 bg-[#1a1a1a]/80 backdrop-blur-md px-16 py-4 rounded-full text-white text-xl border border-white/5 shadow-2xl">
          {navbarItems.map((item) => (
            <motion.li
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              whileHover={{ y: -2 }}
              className={`cursor-pointer transition-colors duration-300 relative font-medium ${activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"
                }`}
            >
              {item.title}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#6a6566] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Desktop Button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p
            onClick={scrollToContact}
            className="text-white px-8 py-3 bg-[#6a6566] rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-xl font-medium"
          >
            Let's Connect
          </p>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center z-[60]">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 focus:outline-none bg-[#1a1a1a] rounded-full border border-white/10 shadow-lg"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay / Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Blur/Darken */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0a0a0a] z-[100] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 left-0 w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center space-y-10 z-[110] md:hidden p-8"
            >
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#6a6566] rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#333] rounded-full blur-[100px]"></div>
              </div>

              {navbarItems.map((item) => (
                <motion.p
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-5xl font-bold tracking-tighter cursor-pointer transition-all duration-300 ${activeSection === item.id ? "text-white scale-110" : "text-gray-500 hover:text-white"}`}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.title}
                </motion.p>
              ))}
              
              <motion.div variants={itemVariants} className="pt-8">
                <motion.p
                  onClick={scrollToContact}
                  className="text-2xl px-12 py-5 bg-[#6a6566] text-white rounded-full font-bold shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Let's Connect
                </motion.p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="absolute bottom-12 flex gap-8 text-gray-500 text-sm tracking-widest uppercase font-bold"
              >
                <span>LinkedIn</span>
                <span>Behance</span>
                <span>Email</span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
