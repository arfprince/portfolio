"use client";

import { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/lib/data";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaHtml5, FaJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiLinux, SiNginx } from "react-icons/si";

const iconMap: { [key: string]: ReactElement } = {
  "React":        <FaReact className="text-cyan-500" size={24} />,
  "Next.js":      <SiNextdotjs className="text-black dark:text-white" size={24} />,
  "TypeScript":   <SiTypescript className="text-blue-600" size={24} />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" size={24} />,
  "JavaScript":   <FaJs className="text-yellow-500" size={24} />,
  "HTML/CSS":     <FaHtml5 className="text-orange-500" size={24} />,
  "Node.js":      <FaNodeJs className="text-green-500" size={24} />,
  "MySQL":        <SiMysql className="text-blue-700" size={24} />,
  "Docker":       <FaDocker className="text-blue-500" size={24} />,
  "AWS":          <FaAws className="text-orange-500" size={24} />,
  "Git":          <FaGitAlt className="text-red-500" size={24} />,
  "Linux":        <SiLinux className="text-black dark:text-white" size={24} />,
  "Nginx":        <SiNginx className="text-green-600" size={24} />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const categories = [
  { id: "all",      name: "All" },
  { id: "frontend", name: "Frontend" },
  { id: "backend",  name: "Backend" },
  { id: "devops",   name: "DevOps" },
  { id: "other",    name: "Other" },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <SectionWrapper id="skills" className="bg-white dark:bg-[#111828]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-3">
            What I Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-primary-600 text-white shadow-sm"
                  : "bg-gray-100 dark:bg-[#1a2236] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#243050]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${selectedCategory}-${skill.name}`}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-[#1a2236] rounded-xl p-5 border border-gray-100 dark:border-[#243050] hover:border-primary-300 dark:hover:border-primary-800 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-7 flex items-center justify-center">
                  {iconMap[skill.name] ?? <FaDatabase className="text-gray-400" size={22} />}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                  {skill.name}
                </h3>
              </div>
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[11px] text-gray-400 dark:text-gray-500">Proficiency</span>
                  <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 dark:bg-[#243050] rounded-full overflow-hidden">
                  <motion.div
                    key={`${selectedCategory}-${skill.name}-bar`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.04, ease: "easeOut" }}
                    className="h-full bg-primary-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 pt-10 border-t border-gray-100 dark:border-gray-800 flex flex-wrap justify-center gap-12"
        >
          {[
            { value: "2+",    label: "Years of Experience" },
            { value: "15+",   label: "Technologies Mastered" },
            { value: "2000+", label: "Problems Solved" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
