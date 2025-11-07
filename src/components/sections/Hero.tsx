"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WaterScene } from "../three/WaterScene";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  const socialLinks = [
    { icon: <FaGithub className="text-3xl" />, url: "https://github.com/samiacodes" },
    { icon: <FaLinkedin className="text-3xl" />, url: "https://linkedin.com/in/samiyalamiya" },
    { icon: <FaTwitter className="text-3xl" />, url: "https://x.com/LamiyaEmi" },
    { icon: <FaInstagram className="text-3xl" />, url: "https://www.instagram.com/emili_yalamia" },
    { icon: <FaYoutube className="text-3xl" />, url: "https://www.youtube.com/@LamiyaEmi" }, 
  ];

  return (
    <section 
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gray-950"
    >
      {/* Water Animation */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <WaterScene mousePosition={mousePosition} />
      </div>

      {/* Social Links */}
      <div className="fixed bottom-8 left-8 hidden lg:flex flex-col space-y-4 z-20">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -3, scale: 1.1 }}
          >
            {social.icon}
          </motion.a>
        ))}
        <div className="w-px h-24 bg-gray-600 mx-auto mt-2"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center z-10 px-4">
        <motion.p
          className="text-purple-400 mb-2 font-mono text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Samia Islam Lamia
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl mb-6 font-medium text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Web Developer
        </motion.div>

        <motion.p
          className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Building scalable web solutions with the MERN stack. I create clean, 
          maintainable code for both front-end interfaces and robust backend services.
        </motion.p>

        {/* Large Social Icons Below Hero Text */}
        <motion.div
          className="flex justify-center space-x-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.button
            onClick={handleDownloadCV}
            className="px-6 py-3 rounded-lg bg-transparent border border-purple-400 text-purple-300 font-medium hover:bg-purple-400/10 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Social Links */}
      <div className="fixed bottom-4 right-4 lg:hidden flex space-x-4 z-20">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
            whileHover={{ y: -3, scale: 1.1 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Hero;