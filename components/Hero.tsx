"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[5rem]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-5">
          <div className="w-32 h-32 mx-auto mb-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-4xl font-bold text-gray-600">
              <Image
                src="/MyFoto.jpg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-5"
        >
          Ahmad Wildan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Putro Santoso
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-xl text-gray-600 mb-5 max-w-2xl mx-auto"
        >
          Full Stack Developer passionate about creating innovative digital
          solutions
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            {" "}
            <a href="/mycv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          <motion.a
            href="https://github.com/awps13"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ahmadwildanputrosantoso"
            whileHover={{ scale: 1.2 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&to=ahmadwildanputro13@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-gray-400" size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
