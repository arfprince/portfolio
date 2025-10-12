"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalInfo, experiences } from "@/lib/data";
import { Download, FileText, Briefcase, Calendar } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = personalInfo.resumeUrl;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <SectionWrapper id="resume" className="transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary-600">Resume</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download my resume to learn more about my professional journey
          </p>
        </div>

        {/* Resume Preview Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xl opacity-90">{personalInfo.title}</p>
                </div>
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <FileText size={40} />
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Experience Timeline */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                  <Briefcase className="text-primary-600" size={24} />
                  Professional Experience
                </h4>

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary-600 before:rounded-full"
                    >
                      {index < experiences.length - 1 && (
                        <div className="absolute left-0.5 top-4 bottom-0 w-px bg-gray-300 dark:bg-gray-700"></div>
                      )}
                      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                        <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                          {exp.position}
                        </h5>
                        <p className="text-primary-600 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </p>
                        <ul className="mt-3 space-y-1">
                          {exp.description.map((desc, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 dark:text-gray-400"
                            >
                              • {desc}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="
                      px-8 py-4 
                      bg-blue-500 text-white shadow-lg 
                      hover:bg-blue-700 
                      dark:bg-primary-600 dark:hover:bg-primary-700 
                      rounded-full font-medium 
                      transition-all duration-200 
                      inline-flex items-center gap-3 group
                    "
                  >
                  <Download className="group-hover:animate-bounce" size={20} />
                  Download Full Resume (PDF)
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Info Cards */}
          <div className="flex flex-col md:flex-row gap-6 mt-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md flex-1"
            >
              <div className="w-16 h-16 bg-blue-400 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">1+</span>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                Years Experience
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                In Software Development
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md flex-1"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">30+</span>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Projects Completed</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Delivered Successfully</p>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md flex-1"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">15+</span>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                Technologies
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Mastered & Applied
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Resume;
