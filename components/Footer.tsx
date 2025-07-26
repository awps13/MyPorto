'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:john.doe@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-400"
          >
            <p className="flex items-center justify-center space-x-1">
              <span>&copy; {currentYear} John Doe. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>using Next.js & Framer Motion</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;