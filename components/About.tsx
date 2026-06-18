'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { personalInfo, experiences } from '@/lib/data';
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => (
  <SectionWrapper id="about" className="bg-gray-50 dark:bg-[#0C1521]">
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>

      {/* Section Title */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-3">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Who I Am</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          A software engineer passionate about building clean, performant products from idea to production.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-14">

        {/* Left — info + bio + stats */}
        <motion.div variants={itemVariants}>
          <div className="space-y-2.5 mb-7">
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <MapPin size={15} className="text-primary-600 dark:text-primary-400 shrink-0" />
              <span className="text-sm">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Mail size={15} className="text-primary-600 dark:text-primary-400 shrink-0" />
              <a href={`mailto:${personalInfo.email}`} className="text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Phone size={15} className="text-primary-600 dark:text-primary-400 shrink-0" />
              <span className="text-sm">{personalInfo.phone}</span>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
            {personalInfo.bio}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            I'm passionate about creating efficient, scalable solutions that make a real impact.
            My approach combines technical depth with creative problem-solving to deliver
            results that matter.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-gray-200 dark:border-gray-700/50">
            {[
              { value: '2+', label: 'Years experience' },
              { value: '10+', label: 'Projects shipped' },
              { value: '15+', label: 'Technologies' },
            ].map(({ value, label }, i) => (
              <div key={label} className="flex items-start gap-8">
                {i > 0 && <div className="w-px self-stretch bg-gray-200 dark:bg-gray-700/50 -ml-8" />}
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — currently working */}
        <motion.div variants={itemVariants}>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-4">
            Currently Working At
          </p>
          <div className="bg-white dark:bg-[#1a2236] rounded-xl p-6 border border-gray-100 dark:border-[#243050] shadow-sm">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5">{experiences[0].position}</h4>
            <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-1">{experiences[0].company}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1 mb-5">
              <Calendar size={11} />
              {experiences[0].duration}
            </p>
            <ul className="space-y-2 mb-5">
              {experiences[0].description.map((desc, i) => (
                <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-primary-500 shrink-0 mt-0.5">▸</span>
                  {desc}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {experiences[0].technologies.map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-gray-100 dark:bg-[#111828] text-gray-600 dark:text-gray-400 text-xs rounded font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </SectionWrapper>
);

export default About;
