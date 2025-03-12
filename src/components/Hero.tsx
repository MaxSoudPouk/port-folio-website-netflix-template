import React, { Component } from "react";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
export const Hero = () => {
  return <div className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" data-prototypeId="2" />
      {/* Content */}
      <motion.div className="relative z-10 text-center" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          John Doe
        </h1>
        <div className="text-xl md:text-2xl text-gray-300 h-20 mb-8">
          <TypewriterComponent options={{
          strings: ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"],
          autoStart: true,
          loop: true
        }} />
        </div>
        {/* Social Links */}
        <motion.div className="flex gap-6 justify-center" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }}>
          <a href="https://github.com" className="text-white hover:text-purple-400 transition-colors">
            <GithubIcon size={24} />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-purple-400 transition-colors">
            <LinkedinIcon size={24} />
          </a>
          <a href="mailto:contact@example.com" className="text-white hover:text-purple-400 transition-colors">
            <MailIcon size={24} />
          </a>
        </motion.div>
      </motion.div>
      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }}>
        <div className="w-5 h-9 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>;
};