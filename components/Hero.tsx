'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';
import { useEffect, useState } from 'react';
import { GitCommit, Download, ArrowRight } from 'lucide-react';
import GithubHeatmap from '@/components/GithubHeatmap';

interface GitHubStats {
  publicRepos: number;
  followers: number;
}

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: personalInfo.github },
  { name: 'LinkedIn', icon: FaLinkedin, url: personalInfo.linkedin },
  { name: 'Twitter', icon: FaTwitter, url: personalInfo.twitter },
];

const Hero = () => {
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [recentCommits, setRecentCommits] = useState<any[]>([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch('https://api.github.com/users/arfprince');
        const userData = await userResponse.json();

        const eventsResponse = await fetch('https://api.github.com/users/arfprince/events/public?per_page=10');
        const eventsData = await eventsResponse.json();
        const rawPushEvents = (eventsData as any[])
          .filter((event: any) => event.type === 'PushEvent')
          .slice(0, 3);

        const pushEvents = await Promise.all(
          rawPushEvents.map(async (event: any) => {
            // payload.commits is sometimes absent; fall back to fetching via head SHA
            const inlineMsg = event.payload?.commits?.[0]?.message;
            if (inlineMsg) {
              return {
                repo: event.repo.name,
                message: inlineMsg.split('\n')[0],
                date: new Date(event.created_at).toLocaleDateString(),
              };
            }
            try {
              const sha = event.payload?.head;
              const [, repoName] = (event.repo.name as string).split('/');
              const commitRes = await fetch(
                `https://api.github.com/repos/arfprince/${repoName}/commits/${sha}`
              );
              const commitData = await commitRes.json();
              return {
                repo: event.repo.name,
                message: (commitData.commit?.message as string | undefined)?.split('\n')[0] ?? '—',
                date: new Date(event.created_at).toLocaleDateString(),
              };
            } catch {
              return { repo: event.repo.name, message: '—', date: new Date(event.created_at).toLocaleDateString() };
            }
          })
        );

        setGithubStats({ publicRepos: userData.public_repos, followers: userData.followers });
        setRecentCommits(pushEvents);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section
      id="home"
      className="scroll-mt-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#0d1117] pt-24 md:pt-28 pb-20 transition-colors duration-300"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] dark:opacity-[0.06]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/60 via-transparent to-transparent dark:from-primary-900/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left content ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full min-w-0"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-green-700 dark:text-green-400">Available for opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 dark:text-gray-400 font-medium text-base mb-1"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-3 leading-tight tracking-tight wrap-break-word"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 mb-5"
            >
              {personalInfo.title}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8 w-full"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Profile image — mobile only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:hidden mb-8 flex justify-center"
            >
              <div className="relative w-44 h-44 sm:w-56 sm:h-56">
                <div className="absolute inset-0 rounded-full bg-primary-500/15 blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-primary-500/20 shadow-xl">
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
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-7"
            >
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Download size={15} />
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 dark:hover:border-primary-500 rounded-lg font-medium text-sm transition-all duration-200"
              >
                Contact Me
                <ArrowRight size={15} />
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-5 mb-8"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    aria-label={link.name}
                    className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
              <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
              <span className="text-sm text-gray-400 dark:text-gray-500">
                {githubStats?.publicRepos ?? '—'} public repos
              </span>
            </motion.div>

            {/* GitHub activity card */}
            {githubStats && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gray-50 dark:bg-[#161b22] rounded-xl p-4 border border-gray-200 dark:border-[#30363d] shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FaGithub size={13} className="text-gray-500 dark:text-gray-400" />
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      GitHub Activity
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{githubStats.followers}</span> followers
                  </span>
                </div>

                {recentCommits.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {recentCommits.map((commit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.08 }}
                        className="flex items-start gap-2 text-xs"
                      >
                        <GitCommit size={12} className="text-green-500 mt-0.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-700 dark:text-gray-300 truncate">{commit.message}</p>
                          <p className="text-gray-400 dark:text-gray-500 text-[11px] mt-0.5">
                            {commit.repo.split('/')[1]} · {commit.date}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                <GithubHeatmap />
              </motion.div>
            )}
          </motion.div>

          {/* ── Right content — profile image (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80 xl:w-[380px] xl:h-[380px]">
              {/* Soft glow */}
              <div className="absolute inset-0 rounded-full bg-primary-500/10 blur-3xl scale-110" />
              {/* Concentric accent rings */}
              <div className="absolute -inset-4 rounded-full border border-primary-500/15" />
              <div className="absolute -inset-8 rounded-full border border-primary-500/8" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
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
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
