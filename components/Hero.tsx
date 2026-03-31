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
    <section id="home" className="scroll-mt-24 min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28 pb-16">
      {/* Map Background - Updated with your exact location */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.2232427596773!2d91.84908989328777!3d24.909900321449975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505546ce0e4d73%3A0x55ff0fbf624d5b6f!2sModina%20Market%20Point!5e0!3m2!1sen!2sbd!4v1764323266657!5m2!1sen!2sbd&style=feature:all%7Celement:geometry%7Ccolor:0x212121&style=feature:all%7Celement:labels.icon%7Cvisibility:off&style=feature:all%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:all%7Celement:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'brightness(0.6) contrast(1)'}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-full overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 sm:mb-6"
            >
              <span className="text-primary-600 dark:text-primary-400 font-medium text-base sm:text-lg">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 break-words leading-tight"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4 sm:mb-6"
            >
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-600 font-semibold break-words">
                {personalInfo.title}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed break-words"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Mobile Pin Profile - Shows here on mobile/tablet (< lg) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:hidden mb-6 md:mb-8 flex justify-center"
            >
              <div className="relative">
                {/* Pin Shadow */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-black/30 rounded-full blur-sm"
                />
                
                {/* Pin Body */}
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative"
                >
                  {/* Pin Point */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-primary-500"></div>
                  
                  {/* Profile Circle */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4">
                    {/* Glow Effect */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 15px rgba(59, 130, 246, 0.5)',
                          '0 0 30px rgba(59, 130, 246, 0.8)',
                          '0 0 15px rgba(59, 130, 246, 0.5)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full"
                    />
                    
                    {/* Profile Image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-white shadow-xl bg-gradient-to-br from-primary-600/20 to-primary-400/20">
                      <Image
                        src={personalInfo.profileImage}
                        alt={personalInfo.name}
                        fill
                        className="object-cover"
                        priority
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/1e3a8a/3b82f6?text=Profile';
                        }}
                      />
                    </div>
                    
                    {/* Location Pulse */}
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-primary-400"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* GitHub Stats Card */}
            {githubStats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 mb-6 md:mb-8 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg"
              >
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-primary-400" size={16} />
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">GitHub Activity</span>
                  </div>
                  <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm">
                    <span className="text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      <span className="text-primary-600 dark:text-primary-400 font-semibold">{githubStats.publicRepos}</span> repos
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 whitespace-nowrap">
                      <span className="text-primary-600 dark:text-primary-400 font-semibold">{githubStats.followers}</span> followers
                    </span>
                  </div>
                </div>
                
                {recentCommits.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-600 dark:text-gray-500 mb-2">Recent commits:</p>
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
                          <p className="text-gray-700 dark:text-gray-300 truncate">{commit.message}</p>
                          <p className="text-gray-500 dark:text-gray-500">{commit.repo.split('/')[1]} • {commit.date}</p>
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
          </motion.div>

          {/* Map Pin Profile - Shows only on large screens >= 1024px */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:flex justify-center items-end"
          >
            {/* Location Pin */}
            <div className="relative">
              {/* Pin Shadow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-black/30 rounded-full blur-sm"
              />
              
              {/* Pin Body */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative"
              >
                {/* Pin Point */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[25px] border-l-transparent border-r-transparent border-t-primary-500"></div>
                
                {/* Profile Circle */}
                <div className="relative w-40 h-40 mb-6">
                  {/* Glow Effect */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(59, 130, 246, 0.5)',
                        '0 0 40px rgba(59, 130, 246, 0.8)',
                        '0 0 20px rgba(59, 130, 246, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full"
                  />
                  
                  {/* Profile Image */}
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-primary-600/20 to-primary-400/20">
                    <Image
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                      priority
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400/1e3a8a/3b82f6?text=Profile';
                      }}
                    />
                  </div>
                  
                  {/* Location Pulse */}
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-2 border-primary-400"
                  />
                </div>
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
            className="w-6 h-10 border-2 border-primary-600 dark:border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-600 dark:bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;