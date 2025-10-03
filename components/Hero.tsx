'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';
import { useEffect, useState } from 'react';
import { GitCommit, Star, GitFork } from 'lucide-react';
import GithubHeatmap from '@/components/GithubHeatmap';

interface GitHubStats {
  publicRepos: number;
  followers: number;
  contributions: number;
}

const Hero = () => {
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [recentCommits, setRecentCommits] = useState<any[]>([]);

  useEffect(() => {
    // Fetch GitHub stats
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/arfprince');
        const userData = await userResponse.json();
        
        // Fetch recent events
        const eventsResponse = await fetch('https://api.github.com/users/arfprince/events/public?per_page=5');
        const eventsData = await eventsResponse.json();
        
        // Filter push events (commits)
        const pushEvents = eventsData
          .filter((event: any) => event.type === 'PushEvent')
          .slice(0, 3)
          .map((event: any) => ({
            repo: event.repo.name,
            message: event.payload.commits?.[0]?.message || 'No commit message',
            date: new Date(event.created_at).toLocaleDateString(),
          }));

        setGithubStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          contributions: 0, // This would require GitHub GraphQL API
        });
        setRecentCommits(pushEvents);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, []);

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: personalInfo.github },
    { name: 'LinkedIn', icon: FaLinkedin, url: personalInfo.linkedin },
    { name: 'Twitter', icon: FaTwitter, url: personalInfo.twitter },
  ];

  return (
    <section id="home" className="scroll-mt-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900/20 to-gray-900 pt-24 md:pt-28">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full md:mt-4">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-primary-600/10"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-primary-400 font-medium text-lg">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 font-semibold">
                {personalInfo.title}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* GitHub Stats Card */}
            {githubStats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-8 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-primary-400" />
                    <span className="text-sm text-gray-400">GitHub Activity</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-300">
                      <span className="text-primary-400 font-semibold">{githubStats.publicRepos}</span> repos
                    </span>
                    <span className="text-gray-300">
                      <span className="text-primary-400 font-semibold">{githubStats.followers}</span> followers
                    </span>
                  </div>
                </div>
                
                {recentCommits.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 mb-2">Recent commits:</p>
                    {recentCommits.map((commit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-start gap-2 text-xs"
                      >
                        <GitCommit size={14} className="text-green-400 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-gray-300 truncate">{commit.message}</p>
                          <p className="text-gray-500">{commit.repo.split('/')[1]} • {commit.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Contribution Heatmap */}
                <div className="mt-4">
                  <GithubHeatmap />
                </div>
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                Hire Me
              </motion.button>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary-500 text-primary-400 rounded-full font-medium hover:bg-primary-500/10 transition-colors duration-200"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4"
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
                    className="w-12 h-12 mb-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500 transition-all duration-200"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 60px rgba(59, 130, 246, 0.8)',
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full"
              />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-500/30 bg-gradient-to-br from-primary-600/20 to-primary-400/20">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/1e3a8a/3b82f6?text=Profile';
                  }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              >
                {'</>'}
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <Star size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
