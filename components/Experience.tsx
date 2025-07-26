"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Backend Developer",
      company: "GPT SCRAPPER",
      period: "FEB 2025 - MAY 2025",
      location: "State University of Malang",
      description: [
        "Developed a backend service using Python to fetch and process ChatGPT conversation data and display it on a website.",
        "Created and designed presentation slides for project showcase.",
        "Collaborated with frontend developers to develop the project.",
      ],
      technologies: [
        "Python",
        "Laragon",
        "Flask",
        "HTML",
        "JavaScript",
        "CSS",
        "BeautifulSoup",
        "Tailwind CSS",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Frontend Developer and Proposal Writer",
      company: "TA WEB",
      period: "FEB 2024 - JUN 2024",
      location: "State University of Malang",
      description: [
        "Designed the order page interface",
        "Collaborated in writing the project proposal and developing the user manual to ensure clear documentation",
        "Successfully registered the project for copyright to protect intellectual property rights",
      ],
      technologies: ["MysQL", "HTML", "JavaScript", "CSS", "Tailwind CSS", "Git", "GitHub", "Google Docs", "Canva"],
    },
    {
      title: "Frontend Developer",
      company: "rentalmobilmalang_zdr_trans",
      period: "January 2025",
      location: "Malang, Indonesia",
      description: [
        "Developed the complete UI for a car rental company profile website.",
      ],
      technologies: ["HTML", "CSS", "Tailwind CSS", "JSON", "JavaScript", "Git", "GitHub"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:space-x-8`}
              >
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-600">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Building size={16} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-700 flex items-start"
                          >
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 hidden md:block">
                  <div className="w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
                </div>

                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
