"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to your CV
    link.download = "Samia-Islam-Lamia-Resume.pdf"; // Filename for download
    link.target = "_blank"; // Open in new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed w-full top-0 left-0 z-50 mt-6"
    >
      <div className="px-4 sm:px-6 lg:px-8 rounded-full container mx-auto z-50 transition-all duration-300 bg-white/5 backdrop-blur-lg border border-white/10">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left side */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white"
          >
            Samia
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <motion.div 
                key={item.name} 
                whileHover={{ y: -2 }}
              >
                <a
                  href={item.path}
                  className="relative font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Download CV Button - Right side */}
          <div className="hidden md:block">
            <motion.button
              onClick={handleDownloadCV}
              className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4 bg-gray-900/90 backdrop-blur-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="w-full text-center py-3 px-4 text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Download CV Button */}
              <button
                onClick={() => {
                  handleDownloadCV();
                  setIsMenuOpen(false);
                }}
                className="w-full text-center py-3 px-4 bg-purple-600 text-white rounded-lg font-medium"
              >
                Download CV
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;