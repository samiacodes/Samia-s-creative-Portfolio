"use client";

import React from "react";
import { motion } from "framer-motion";
import { techSkills } from "@/data";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiFigma,
  SiTypescript,
} from "react-icons/si";

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiFigma,
  SiTypescript,
};

const TechStack = () => {
  return (
    <div className="w-full">
      <div className="space-y-8">
        {techSkills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="space-y-4"
          >
            {/* Category Title */}
            <h3 className="text-lg font-semibold text-white dark:text-white mb-4">
              {category.category}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = iconMap[skill.icon];
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative"
                  >
                    {/* Skill Card */}
                    <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-opacity-100"
                      style={{
                        borderColor: `${skill.color}40`,
                      }}
                    >
                      {/* Icon */}
                      {IconComponent && (
                        <IconComponent
                          className="text-4xl mb-2 transition-all duration-300 group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                      )}
                      
                      {/* Skill Name */}
                      <span className="text-sm font-medium text-center text-neutral-700 dark:text-neutral-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
