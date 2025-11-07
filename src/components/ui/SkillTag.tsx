"use client";

import { motion } from "framer-motion";

type SkillTagProps = {
  name: string;
  index: number;
};

export const SkillTag = ({ name, index }: SkillTagProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(139, 92, 246, 0.1)",
        borderColor: "rgba(139, 92, 246, 0.3)"
      }}
    >
      {name}
    </motion.span>
  );
};