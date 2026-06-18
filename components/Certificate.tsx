'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const certificates = [
  { id: 1, title: 'Certificate of SWE Internship',                    image: '/assets/certificate1.jpeg' },
  { id: 2, title: 'Certificate of Competitive Programming',            image: '/assets/certificate2.jpeg' },
  { id: 3, title: 'Certificate of Trainee of Competitive Programming', image: '/assets/certificate3.jpeg' },
];

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Certificate = () => {
  const [selected, setSelected] = useState<typeof certificates[0] | null>(null);

  return (
    <SectionWrapper id="certificates" className="bg-gray-50 dark:bg-[#111828]">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>

        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-3">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              onClick={() => setSelected(cert)}
              className="bg-white dark:bg-[#1a2236] rounded-xl overflow-hidden border border-gray-100 dark:border-[#243050] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">{cert.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full bg-white dark:bg-[#1a2236] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X size={18} />
              </button>
              <Image
                src={selected.image}
                alt={selected.title}
                width={900}
                height={640}
                className="object-contain w-full h-auto"
              />
              <div className="px-6 py-4 border-t border-gray-100 dark:border-[#243050]">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{selected.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Certificate;
