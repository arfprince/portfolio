'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { personalInfo, experiences, education } from '@/lib/data';
import { Calendar, MapPin, Mail, Phone, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary-600">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, experience, and what drives me in the world of software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Personal Information
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="text-primary-600" size={20} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Mail className="text-primary-600" size={20} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Phone className="text-primary-600" size={20} />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                I'm passionate about creating efficient, scalable solutions that make a real impact. 
                My approach combines technical expertise with creative problem-solving to deliver 
                exceptional results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md"
              >
                <h4 className="text-3xl font-bold text-primary-600">1+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md"
              >
                <h4 className="text-3xl font-bold text-primary-600">10+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
              </motion.div>
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md"
              >
                <h4 className="text-3xl font-bold text-primary-600">100+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div variants={itemVariants}>
            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <Briefcase className="text-primary-600" size={24} />
                Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.slice(0, 2).map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary-600 before:rounded-full"
                  >
                    <div className="absolute left-0.5 top-4 bottom-0 w-px bg-gray-300 dark:bg-gray-700"></div>
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                      {exp.position}
                    </h4>
                    <p className="text-primary-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                      <Calendar size={14} />
                      {exp.duration}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {exp.description.slice(0, 2).map((desc, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                          • {desc}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <GraduationCap className="text-primary-600" size={24} />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                  >
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                      <Calendar size={14} />
                      {edu.duration}
                    </p>
                    {edu.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {edu.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
