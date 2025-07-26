'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 72 },
        { name: 'Next.js', level: 64 },
        { name: 'Tailwind CSS', level: 87},
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 67 },
        { name: 'Javascript', level: 79 },
        { name: 'Express.js', level: 55 },
        { name: 'PostgreSQL', level: 53},
        { name: 'Python', level: 53},
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 52 },
        { name: 'XAMPP', level: 47 },
        { name: 'GitHub', level: 90 },
        { name: 'Vercel', level: 84 },
        { name: 'Cloudinary', level: 74 },
        { name: 'Neon', level: 74 },
        
      ],
    },
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Python', 'Express.js', 'PostgreSQL', 'Tailwind CSS',
    'Git', 'Figma', 'XAMPP', 'GitHub', 'Vercel', 'ChatGPT', 'Claude', 'Bolt'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center text-xl text-blue-600">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-white hover:bg-blue-50 border border-blue-200 hover:border-blue-300 transition-all">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;