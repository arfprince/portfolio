'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '@/lib/data';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, 
  AlertCircle, Loader2, MessageSquare
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_1bi7evh',
        'template_c1ztwnf',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '-kbv8BZvWkiCvz539'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new opportunities, creative ideas, or 
              partnerships. Don't hesitate to get in touch!
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <Mail className="text-primary-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-800 dark:text-gray-200 hover:text-primary-600 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <Phone className="text-primary-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-800 dark:text-gray-200">{personalInfo.phone}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary-600" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-800 dark:text-gray-200">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <FaTwitter size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="text-primary-600" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Send Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-800 dark:text-gray-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-800 dark:text-gray-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-800 dark:text-gray-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className='hover:click-effect' />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 15,
                          delay: 0.1 
                        }}
                      >
                        <CheckCircle size={24} className="text-green-600 dark:text-green-400" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-300">
                          Thank You!
                        </h4>
                        <p className="text-sm text-green-700 dark:text-green-400">
                          Your message has been sent successfully. I'll get back to you soon!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle size={24} className="text-red-600 dark:text-red-400" />
                      <div>
                        <h4 className="font-semibold text-red-800 dark:text-red-300">
                          Oops! Something went wrong
                        </h4>
                        <p className="text-sm text-red-700 dark:text-red-400">
                          Failed to send message. Please try again or contact me directly.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;
