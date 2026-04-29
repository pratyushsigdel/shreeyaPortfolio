import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const navbarItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "projects" },
     { title: "Skills", id: "skills" },
  ];

  const [activeSection, setActiveSection] = useState("home");

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
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-around items-center p-6 fixed top-0 left-0 w-full z-50 overflow-hidden backdrop-blur-md bg-[#0a0a0a]/50 border-b border-white/5"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 rounded-full text-white text-3xl bg-[#6a6566] border-2 border-white/20 flex items-center justify-center shadow-lg cursor-pointer"
        onClick={() => handleScrollTo("home")}
      >
        SS
      </motion.div>

      <ul className="flex gap-10 bg-[#1a1a1a]/80 backdrop-blur-md px-16 py-4 rounded-full text-white text-xl border border-white/5 shadow-2xl">
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
      <motion.div
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
    </motion.div>
  );
};

export default NavBar;
