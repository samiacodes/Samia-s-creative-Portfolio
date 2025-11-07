"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section 
      id="about"
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/20">
                <Image 
                  src="/profile.png" 
                  alt="Samia Islam Lamia" 
                  className="w-full h-full object-cover"
                  width={320}
                  height={320}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-purple-600 rounded-full border-4 border-gray-900"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I&#39;m a passionate full-stack developer with expertise in the MERN stack.
              I love creating responsive, user-friendly web applications that solve
              real-world problems.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4">
              My journey in web development started 2 years ago, and since then
              I&#39;ve worked on various projects ranging from simple websites to
              complex web applications.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4">
              When I&#39;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good book.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;