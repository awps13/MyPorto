"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Car-Rental",
      description:
        "A mobile-friendly landing page website that effectively showcases their services, attracts new customers, and enhances online visibility.",
      image: "/carrental.png",
      technologies: ["HTML", "CSS", "Javascript", "JSON"],
      liveLink: "https://awps13.github.io/CarRental/",
      githubLink: "https://github.com/awps13/CarRental",
      featured: true,
    },
    {
      title: "UI/UX SoulLink",
      description:
        "UI/UX design for a platform that provides emotional status checking features and allows users to share stories without stigma.",
      image: "/uiux.png",
      technologies: ["Figma"],
      liveLink:
        "https://www.figma.com/proto/mbd2M79tV5Al7w49sud1L3/Lomba-UI-UX?node-id=92-262&t=4uz780Q79zUIqW4H-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=29%3A2557",
      githubLink:
        "https://www.figma.com/design/mbd2M79tV5Al7w49sud1L3/Lomba-UI-UX?node-id=0-1&p=f",
      featured: true,
    },
    {
      title: "GreenTech",
      description:
        "A platform display (frontend) used to monitor plant status",
      image:
        "/monitoring.png",
      technologies: [
        "Javascript",
        "Tailwind CSS",
        "Node.js",
        "ReactJS",
        "Vite"
      ],
      githubLink: "https://github.com/awps13/Plant-Health-Monitoring-Landing-Page",
      featured: false,
    },
    {
      title: "GPT Scraper",
      description:
        "A full stack platform for scraping chat data from ChatGPT that can be used for preprocessing.",
      image:
        "/gptsniffer.png",
      technologies: [
        "Python", "BeautifulSoup", "Flask", "HTML", "CSS", "TailwindCSS"
      ],
      githubLink: "https://github.com/awps13/GPT-SCRAPER",
      featured: false,
    },
    {
      title: "Disease Spread Use Python",
      description:
        "Simulation of disease spread using 3D visualization as an assessment for the graphic visualization course",
      image:
        "/disease.png",
      technologies: [
        "Python"
      ],
      githubLink: "https://github.com/awps13/Visualisasi-Penyebaran-Penyakit-Disease-Spread-use-python",
      featured: false,
    },
    
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github size={14} className="mr-1" />
                        Code
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
