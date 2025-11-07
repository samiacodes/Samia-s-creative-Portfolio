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

const TechStack = () => {
  // Simple component to render icons
  const renderIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case "SiHtml5": return <SiHtml5 style={{ color }} />;
      case "SiCss3": return <SiCss3 style={{ color }} />;
      case "SiJavascript": return <SiJavascript style={{ color }} />;
      case "SiReact": return <SiReact style={{ color }} />;
      case "SiTailwindcss": return <SiTailwindcss style={{ color }} />;
      case "SiNextdotjs": return <SiNextdotjs style={{ color }} />;
      case "SiNodedotjs": return <SiNodedotjs style={{ color }} />;
      case "SiExpress": return <SiExpress style={{ color }} />;
      case "SiMongodb": return <SiMongodb style={{ color }} />;
      case "SiFirebase": return <SiFirebase style={{ color }} />;
      case "SiGit": return <SiGit style={{ color }} />;
      case "SiFigma": return <SiFigma style={{ color }} />;
      case "SiTypescript": return <SiTypescript style={{ color }} />;
      default: return null;
    }
  };

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
              {category.skills.map((skill, skillIndex) => (
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
                  <div 
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-opacity-100"
                    style={{
                      borderColor: `${skill.color}40`,
                    }}
                  >
                    {/* Icon */}
                    <div className="text-4xl mb-2 transition-all duration-300 group-hover:scale-110">
                      {renderIcon(skill.icon, skill.color)}
                    </div>
                    
                    {/* Skill Name */}
                    <span className="text-sm font-medium text-center text-neutral-700 dark:text-neutral-300">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;