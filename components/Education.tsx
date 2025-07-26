"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { link } from "node:fs";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: "Bachelor of Informatics Engineering",
      school: "State University of Malang",
      period: "2013 - Now",
      location: "Malang, Indonesia",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering and Machine Learning.",
      achievements: [
        "Awarded 2 copyrights officially registered by the government",
        "Developed a professional website for a car rental business owner",
        "Built an IoT system to monitor room temperature",
        "Won 2 national-level competitions",
      ],
    },
    {
      degree: "Science major in Senior High School",
      school: "Singosari State Senior High School 1",
      period: "2021 - 2023",
      location: "Malang, Indonesia",
      gpa: "92.2/100.0",
      description:
        "Graduated from the Final Class of the Acceleration Program at Singosari Senior High School 1.",
      achievements: [
        "Gold Medalist at the National Science Olympiad in Biology",
        "Gold Medalist at the NATIONAL YOUTH SCIENCE OLYMPICS in the field of Informatics",
        "Silver Medalist at the NATIONAL YOUTH SCIENCE OLYMPICS in Mathematics",
      ],
    },
  ];

  const certifications = [
    {
      name: "Coding Camp 2024 powered by DBS Foundation",
      issuer: "Dicoding Indonesia",
      year: "2024",
      link: "https://drive.google.com/file/d/1uHJVcJcGp8eSUP9QOflEpyBUEPxfYKsF/view?usp=sharing",
    },
    {
      name: "Cisco Academy International IT Essentials Certification",
      issuer: "State University of Malang",
      year: "2025",
      link: "https://drive.google.com/file/d/1rH7HpZa7Wkt-DDUKNmkKb3bOnSv3JRPr/view?usp=sharing",
    },
    {
      name: "Electrical Engineering and Informatics Student Creativity Festival (FESMARO) 2025",
      issuer: "State University of Malang",
      year: "2025",
      link: "https://drive.google.com/file/d/1iaLCoZu0RyLeWhBCwPeSHhi-FT7smBqg/view?usp=sharing",
    },
    {
      name: "Innovations, Developments, Explorations and Applications in Techno-Science Festival (IDEA-Fest) 2024",
      issuer: "State University of Malang",
      year: "2024",
      link: "https://drive.google.com/file/d/1iimwzW3Q65Pi0waQ7V8yHJwwWGubh3qs/view?usp=sharing",
    },
    {
      name: "Capstone Project Competition",
      issuer: "State University of Malang",
      year: "2025",
      link: "https://drive.google.com/file/d/1wfJoavxLsmCG9A8R4eBIvGQMChDhDc1d/view?usp=sharing",
    },
    {
      name: "UI UX DESIGN COMPETITION",
      issuer: "Institute ASIA",
      year: "2025",
      link: "https://drive.google.com/file/d/18KqF8HJZSMk-EsF9aWY98soSrn8ovzyG/view?usp=sharing",
    },
    {
      name: "AI Beyond Code Workshop: Building Smart Solutions for the Real World",
      issuer: "State University of Malang",
      year: "2025",
      link: "https://drive.google.com/file/d/1lJrUpqRiM8vReroHgcWPWOqNl6lsz2EP/view?usp=sharing",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-blue-600">
                        <GraduationCap className="text-blue-600" size={24} />
                        <span>{edu.degree}</span>
                      </CardTitle>
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-gray-800">
                          {edu.school}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          <span className="font-semibold">GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{edu.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-gray-700 flex items-start"
                            >
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-blue-600 font-medium text-sm">
                        {cert.year}
                      </p>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                        >
                          View Certificate
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
