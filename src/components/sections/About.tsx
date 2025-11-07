"use client";

import { motion } from "framer-motion";

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
                <img 
                  src="/profile.png" 
                  alt="Samia Islam Lamia" 
                  className="w-full h-full object-cover"
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
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a passionate Full Stack Web Developer based in Dhaka, Bangladesh. 
              I specialize in building responsive and intuitive web applications using 
              modern technologies like React, Node.js, and MongoDB.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My journey in web development started during the COVID lockdown, and 
              since then I've been continuously learning and improving my skills. 
              I believe in writing clean, maintainable code and following best practices.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me reading books, crafting, or enjoying 
              nature. These hobbies keep me grounded and bring balance to my everyday life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;