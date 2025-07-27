"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className=" p-1 rounded-2xl mb-8 max-w-md mx-auto">
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center text-6xl font-bold text-gray-500 shadow-2xl">
                <Image
                  src="/passfotokotak.jpg"
                  width={200}
                  height={200}
                  alt="passfoto"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              I am a Full Stack Developer with a focus on FrontEnd
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              With over 2 years of experience in web development, I specialize
              in creating modern, responsive, and user-friendly applications. I
              am passionate about clean code, innovative solutions, and
              continuous learning.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              My skills include frontend technologies such as React, Next.js,
              and TypeScript, as well as backend development with Node.js,
              Python, and databases like MySQL. I enjoy tackling complex
              problems and turning ideas into reality.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
