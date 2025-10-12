"use client";
import { ReactElement } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/lib/data";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiKubernetes,
  SiLinux,
} from "react-icons/si";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "devops", name: "DevOps" },
  ];

  const getIcon = (skillName: string) => {
    const iconMap: { [key: string]: ReactElement } = {
      React: <FaReact className="text-cyan-500" size={30} />,
      "Next.js": (
        <SiNextdotjs className="text-black dark:text-white" size={30} />
      ),
      TypeScript: <SiTypescript className="text-blue-600" size={30} />,
      "Tailwind CSS": <SiTailwindcss className="text-cyan-400" size={30} />,
      JavaScript: <FaJs className="text-yellow-500" size={30} />,
      "HTML/CSS": <FaHtml5 className="text-orange-500" size={30} />,
      "Node.js": <FaNodeJs className="text-green-500" size={30} />,
      Python: <FaPython className="text-blue-500" size={30} />,
      "Express.js": <SiExpress className="text-gray-600" size={30} />,
      // 'PostgreSQL': <SiPostgresql className="text-blue-700" size={30} />,
      MongoDB: <SiMongodb className="text-green-600" size={30} />,
      Docker: <FaDocker className="text-blue-500" size={30} />,
      AWS: <FaAws className="text-orange-600" size={30} />,
      Git: <FaGitAlt className="text-red-500" size={30} />,
      // 'Kubernetes': <SiKubernetes className="text-blue-600" size={30} />,
      Linux: <SiLinux className="text-black dark:text-white" size={30} />,
    };

    return (
      iconMap[skillName] || <FaDatabase className="text-gray-500" size={30} />
    );
  };

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <SectionWrapper id="skills" className="transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary-600">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${selectedCategory}-${skill.name}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  {getIcon(skill.name)}
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-xs text-primary-600 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      key={`${selectedCategory}-${skill.name}-bar`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-white text-2xl font-bold">1+</span>
            </motion.div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Years of Experience
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building modern web applications
            </p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-white text-2xl font-bold">15+</span>
            </motion.div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Technologies Mastered
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Always learning and adapting
            </p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-white text-2xl font-bold">∞</span>
            </motion.div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Problems Solved
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Turning challenges into solutions
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
