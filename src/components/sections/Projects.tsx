"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects as projectData } from "@/data";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";
import { ProjectCard } from "../ui/ProjectCard";

export type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  linkLive?: string;
  linkGitHub?: string;
  link?: string;
  role?: string;
  tech?: string;
  achievements?: string;
  keySkills?: string;
  challenges?: string;
  futureImprovements?: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveTab("overview");
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section 
      id="projects"
      className="py-20 bg-gray-950"
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
            My Projects
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project as Project} 
              index={index} 
              onClick={openProjectModal} 
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 rounded-full p-2 z-10 transition-colors"
              >
                <FiX className="text-white" />
              </button>

              <div className="relative">
                <div className="relative h-56 w-full overflow-hidden">
                  {selectedProject.img.endsWith('.mp4') ? (
                    <video 
                      src={selectedProject.img} 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img 
                      src={selectedProject.img} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex border-b border-gray-700 mb-6">
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === "overview"
                          ? "text-purple-400 border-b-2 border-purple-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => setActiveTab("overview")}
                    >
                      Overview
                    </button>
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === "details"
                          ? "text-purple-400 border-b-2 border-purple-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => setActiveTab("details")}
                    >
                      Technical Details
                    </button>
                    <button
                      className={`px-4 py-2 font-medium ${
                        activeTab === "links"
                          ? "text-purple-400 border-b-2 border-purple-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => setActiveTab("links")}
                    >
                      Project Links
                    </button>
                  </div>

                  {activeTab === "overview" && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Project Description
                      </h4>
                      <p className="text-gray-400 mb-6">
                        {selectedProject.des}
                      </p>

                      {selectedProject.achievements && (
                        <>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Key Achievements
                          </h4>
                          <p className="text-gray-400 mb-6">
                            {selectedProject.achievements}
                          </p>
                        </>
                      )}

                      {selectedProject.keySkills && (
                        <>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Key Skills Applied
                          </h4>
                          <p className="text-gray-400 mb-6">
                            {selectedProject.keySkills}
                          </p>
                        </>
                      )}

                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.iconLists.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-sm"
                          >
                            {tech.replace("/", "").replace(".svg", "")}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "details" && (
                    <div className="space-y-6">
                      {selectedProject.challenges && (
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Technical Challenges
                          </h4>
                          <p className="text-gray-400">
                            {selectedProject.challenges}
                          </p>
                        </div>
                      )}

                      {selectedProject.futureImprovements && (
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Future Improvements
                          </h4>
                          <p className="text-gray-400">
                            {selectedProject.futureImprovements}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "links" && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={selectedProject.linkLive || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                          <FiExternalLink /> Visit Live Demo
                        </a>
                        <a
                          href={selectedProject.linkGitHub || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors border border-gray-700"
                        >
                          <FiGithub /> GitHub Repository
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;