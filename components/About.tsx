'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { personalInfo, experiences } from '@/lib/data';
import { Calendar, MapPin, Mail, Phone, Briefcase } from 'lucide-react';

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

const About = () => {

  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-[#0C1521] transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
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
                className="bg-white dark:bg-[#1a2236] rounded-lg p-4 text-center shadow-md"
              >
                <h4 className="text-3xl font-bold text-primary-600">2+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-[#1a2236] rounded-lg p-4 text-center shadow-md"
              >
                <h4 className="text-3xl font-bold text-primary-600">10+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
              </motion.div>
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-[#1a2236] rounded-lg p-4 text-center shadow-md"
              >
                <h4 className="text-3xl font-bold text-primary-600">100+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Currently Working */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <Briefcase className="text-primary-600" size={24} />
              Currently Working
            </h3>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-[#1a2236] rounded-xl p-6 shadow-md"
            >
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                {experiences[0].position}
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">{experiences[0].company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-2">
                <Calendar size={14} />
                {experiences[0].duration}
              </p>
              <ul className="mt-4 space-y-2">
                {experiences[0].description.map((desc, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {experiences[0].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
