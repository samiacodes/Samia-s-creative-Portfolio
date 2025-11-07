"use client";

import { motion } from "framer-motion";
import type { Project } from "../sections/Projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
};

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.2)"
      }}
      onClick={() => onClick(project)}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.des}</p>
        <div className="flex flex-wrap gap-2">
          {project.iconLists.slice(0, 3).map((icon, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
            >
              {icon.replace("/", "").replace(".svg", "")}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};