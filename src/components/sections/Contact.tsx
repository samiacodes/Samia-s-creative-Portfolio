"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "dQcUnRgakVGu-be3D");
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    // Get form data
    const formData = {
      user_name: (form.current.user_name as HTMLInputElement).value,
      user_email: (form.current.user_email as HTMLInputElement).value,
      user_message: (form.current.message as HTMLTextAreaElement).value,
      current_time: new Date().toLocaleString(),
      current_year: new Date().getFullYear(),
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_1yc7t8w",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_x523smo",
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "dQcUnRgakVGu-be3D"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          if (form.current) {
            form.current.reset();
          }
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert(`Failed to send message: ${error.text || "Unknown error"}`);
        }
      );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('samiacodes2002@gmail.com');
    toast.success('Email copied to clipboard!');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8801777272323', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section 
      id="contact"
      className="py-20 bg-gray-950 relative"
    >
      <div className="absolute inset-0 bg-dot-white/[0.1]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Feel free to reach out to me through any of the following channels.
            I&#39;ll get back to you as soon as possible!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Contact Form - Glassmorphism Card */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Send a Message
                </span>
              </h3>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-700/50 text-cyan-100 px-4 py-3 rounded mb-6"
                >
                  <p>Message sent successfully! I&#39;ll get back to you soon.</p>
                </motion.div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div
                  className="relative"
                  onFocus={() => setActiveInput("name")}
                  onBlur={() => setActiveInput(null)}
                >
                  <label
                    htmlFor="name"
                    className={`block mb-2 text-sm font-medium ${
                      activeInput === "name"
                        ? "text-purple-400"
                        : "text-gray-400"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white placeholder-gray-600 ${
                      activeInput === "name"
                        ? "border-purple-500 shadow-[0_0_0_1px_rgba(124,58,237,0.5)]"
                        : "border-gray-700"
                    }`}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div
                  className="relative"
                  onFocus={() => setActiveInput("email")}
                  onBlur={() => setActiveInput(null)}
                >
                  <label
                    htmlFor="email"
                    className={`block mb-2 text-sm font-medium ${
                      activeInput === "email"
                        ? "text-cyan-400"
                        : "text-gray-400"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white placeholder-gray-600 ${
                      activeInput === "email"
                        ? "border-cyan-500 shadow-[0_0_0_1px_rgba(59,130,246,0.5)]"
                        : "border-gray-700"
                    }`}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div
                  className="relative"
                  onFocus={() => setActiveInput("message")}
                  onBlur={() => setActiveInput(null)}
                >
                  <label
                    htmlFor="message"
                    className={`block mb-2 text-sm font-medium ${
                      activeInput === "message"
                        ? "text-purple-400"
                        : "text-gray-400"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white placeholder-gray-600 ${
                      activeInput === "message"
                        ? "border-purple-500 shadow-[0_0_0_1px_rgba(124,58,237,0.5)]"
                        : "border-gray-700"
                    }`}
                    required
                    placeholder="Type your message here"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow hover:shadow-purple-500/20 disabled:opacity-50"
                  whileHover={{ scale: loading ? 1 : 1.01 }}
                  whileTap={{ scale: loading ? 1 : 0.99 }}
                  onHoverStart={() => !loading && setIsHovered(true)}
                  onHoverEnd={() => !loading && setIsHovered(false)}
                >
                  <motion.span
                    animate={{ x: isHovered ? 3 : 0 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="flex items-center"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && <RiSendPlaneFill className="ml-2" />}
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information - Glassmorphism Card */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800 backdrop-blur-sm h-full">
              <h3 className="text-xl font-bold mb-6 text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Contact Info
                </span>
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-2 rounded-lg mr-4">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 mb-1">Email</h4>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center text-gray-200 hover:text-white cursor-pointer"
                    >
                      <span>samiacodes2002@gmail.com</span>
                      <FaEnvelope className="ml-2 text-sm" />
                    </button>
                  </div>
                </motion.div>

                {/* WhatsApp */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-2 rounded-lg mr-4">
                    <FaWhatsapp className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 mb-1">WhatsApp</h4>
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-gray-200 hover:text-white cursor-pointer"
                    >
                      +880 1777-272323
                    </button>
                  </div>
                </motion.div>

                {/* Social Links */}
                <div className="pt-4">
                  <h4 className="font-medium text-gray-300 mb-4">
                    Connect with me
                  </h4>
                  <div className="flex gap-3">
                    <motion.a
                      href="https://github.com/samiacodes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all flex items-center justify-center"
                      whileHover={{ y: -2, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="GitHub"
                    >
                      <FaGithub className="text-xl text-white" />
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com/in/samiyalamiya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all flex items-center justify-center"
                      whileHover={{ y: -2, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="LinkedIn"
                    >
                      <FaLinkedin className="text-xl text-white" />
                    </motion.a>

                    <motion.a
                      href="https://x.com/LamiyaEmi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-blue-400 p-3 rounded-lg transition-all flex items-center justify-center"
                      whileHover={{ y: -2, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="Twitter"
                    >
                      <FaTwitter className="text-xl text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;