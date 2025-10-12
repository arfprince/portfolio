'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: personalInfo.github },
    { name: 'LinkedIn', icon: FaLinkedin, url: personalInfo.linkedin },
    { name: 'Twitter', icon: FaTwitter, url: personalInfo.twitter },
    { name: 'Email', icon: FaEnvelope, url: `mailto:${personalInfo.email}` },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{personalInfo.title}</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-300 dark:border-gray-800"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          {/* <p className="text-gray-500 text-sm mt-2">
            Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
          </p> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
