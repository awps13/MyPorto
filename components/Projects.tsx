'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with modern UI, payment integration, and admin dashboard. Built with Next.js, TypeScript, and Stripe.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media performance tracking with data visualization and reporting features.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'FastAPI', 'Pandas', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, contact forms, and blog functionality.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Contentful'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Fitness Tracker API',
      description: 'A RESTful API for fitness tracking with user authentication, workout logging, and progress analytics.',
      image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express.js', 'JWT', 'PostgreSQL', 'Swagger'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
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
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
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
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github size={14} className="mr-1" />
                        Code
                      </Button>
                    </div>
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