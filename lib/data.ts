import { Project, Skill, Experience, Education } from '@/types';

export const personalInfo = {
  name: "Md. Armanur Rahman Faisal Prince",
  title: "Software Engineer",
  email: "parmanurrahmanfaisal@gmail.com",
  phone: "+8801521528257",
  location: "Chattogram, Bangladesh",
  bio: "Software Engineer at AppifyLab with expertise in full-stack web development, DevOps, and competitive programming. Experienced in React, Next.js, AdonisJS, AWS, and Docker. CS student at IIUC with 2000+ problems solved across competitive programming platforms.",
  profileImage: "/profile.jpg",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/arfprince",
  linkedin: "https://linkedin.com/in/md-armanur-rahman-faisal-prince-62846a206",
  twitter: "https://twitter.com/ARFprince",
  codeforces: "https://codeforces.com/profile/ARFprince",
  codechef: "https://www.codechef.com/users/arfprince",
  atcoder: "https://atcoder.jp/users/ARFprince",
  leetcode: "https://leetcode.com/ARFprince/",
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "AdonisJS", level: 80, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "Lucid ORM", level: 75, category: "backend" },
  { name: "REST APIs", level: 88, category: "backend" },

  // DevOps
  { name: "Docker", level: 80, category: "devops" },
  { name: "AWS", level: 72, category: "devops" },
  { name: "Nginx", level: 75, category: "devops" },
  { name: "CI/CD", level: 78, category: "devops" },
  { name: "Git", level: 90, category: "devops" },
  { name: "Linux", level: 80, category: "devops" },
  { name: "Bash scripting", level: 70, category: "devops" },
  { name: "Microservices", level: 72, category: "devops" },

  // Other
  { name: "C++", level: 85, category: "other" },
  { name: "C", level: 80, category: "other" },
  { name: "Data Structures & Algorithms", level: 88, category: "other" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Foodie Finder",
    description: "Offers a seamless way for users to discover, search, and explore recipes with authentication and personalized meal recommendations.",
    image: "/assets/project1.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://recipe-boo-k.vercel.app/",
    githubUrl: "https://github.com/arfprince/recipe-book",
    category: "fullstack"
  },
  {
    id: "2",
    title: "Blog",
    description: "A responsive blog app built with React and Vite, featuring create, edit, delete, and view functionalities with authentication.",
    image: "/assets/project2.jpg",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://my-blog-lime-eta.vercel.app/",
    githubUrl: "https://github.com/arfprince/my-blog",
    category: "fullstack"
  },
  {
    id: "3",
    title: "Favourite Memes",
    description: "A meme searching web app that helps you find your favourite memes with different themes and a curated collection.",
    image: "/assets/project3.jpg",
    technologies: ["React", "JavaScript", "CSS3", "Cloudflare Pages"],
    liveUrl: "https://3268b058.favourite-memes.pages.dev/?demo=false&theme=coffee",
    githubUrl: "https://github.com/arfprince/favourite-memes",
    category: "frontend"
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects, skills, and achievements with smooth animations and optimized performance.",
    image: "/assets/project4.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/arfprince/portfolio",
    category: "frontend"
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    position: "Software Engineer",
    company: "AppifyLab",
    duration: "February 2025 – Present | Sylhet, Bangladesh",
    description: [
      "Frontend development using Next.js and React",
      "Backend development with AdonisJS framework",
      "Database management using MySQL and Lucid ORM",
      "Deployment and management of Dockerized applications with Nginx (reverse proxy, SSL) and CI/CD pipelines using GitHub Actions",
      "Hands-on experience with AWS services — including ALB, ECS, and RDS — for hosting, container orchestration and microservices architecture design",
      "Integrated BunnyCDN for optimized asset delivery and Meta CAPI for enhanced server-side event tracking"
    ],
    technologies: ["Next.js", "React", "AdonisJS", "MySQL", "Docker", "AWS", "Nginx", "GitHub Actions"]
  },
  {
    id: "2",
    position: "Software Engineer Intern",
    company: "AppifyLab",
    duration: "December 2024 – February 2025",
    description: [
      "Assisted in frontend and backend development tasks",
      "Gained hands-on experience with AdonisJS and MySQL",
      "Contributed to deployment workflows using Docker and CI/CD pipelines"
    ],
    technologies: ["Next.js", "React", "AdonisJS", "MySQL", "Docker"]
  },
  {
    id: "3",
    position: "DevOps Intern",
    company: "AppifyLab",
    duration: "November 2024 – December 2024",
    description: [
      "Managed Dockerized application deployments with Nginx as reverse proxy",
      "Configured SSL and set up CI/CD pipelines using GitHub Actions",
      "Worked with AWS services including ECS, ALB, and RDS"
    ],
    technologies: ["Docker", "Nginx", "AWS", "GitHub Actions", "Linux"]
  },
  {
    id: "4",
    position: "Competitive Programmer",
    company: "Multiple Platforms",
    duration: "2021 – Present",
    description: [
      "Codeforces: ARFprince — Max rating 1284 (Pupil)",
      "CodeChef: arfprince — Max rating 1603",
      "AtCoder: ARFprince — Max rating 599",
      "LeetCode: 100+ problems solved",
      "Solved 2000+ problems and participated in 250+ programming contests across platforms"
    ],
    technologies: ["C++", "C", "Algorithms", "Data Structures"]
  },
  {
    id: "5",
    position: "Computer Science Student",
    company: "IIUC",
    duration: "2021 – Present",
    description: [
      "Studying core CS subjects including Data Structures, Algorithms, and Software Engineering",
      "Teaching Assistant for C Programming II and Competitive Programming I (June 2023 – June 2024)",
      "Competitive Programming Trainer and Mentor at IIUC Competitive Programming Society (2023)",
      "Bootcamp Coordinator at IIUC Competitive Programming Society (January 2024 – 2025)"
    ],
    technologies: ["C++", "Java", "Python", "Web Technologies"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "International Islamic University Chittagong (IIUC)",
    duration: "01/2021 – 12/2025",
    description: "Pursuing degree with focus on Software Engineering, Algorithms, and Web Development"
  }
];

export const achievements = [
  {
    category: "National Collegiate Programming Contest (NCPC)",
    items: [
      "Ranked 162nd out of 195 teams in the NCPC 2023",
    ]
  },
  {
    category: "Inter University Programming Contest (IUPC)",
    items: [
      "42nd among 98 teams at SEC Inter University JUPC 2022",
      "36th in PU IUPC Divisional 2024",
      "36th out of 197 teams in ICT Division – 7th DRMC International Tech Carnival 2024",
      "36th in 15th IIUC Inter University Programming Contest 2023 [DIVISIONAL]",
    ]
  },
  {
    category: "Intra University Programming Contest",
    items: [
      "4th in CCE Inter-Department Programming Contest",
      "5th in IIUC Intra-University Programming Contest",
      "Rising Star – IIUC Intra University Junior Programming Contest 2022",
      "2nd – IIUC Intra University Junior Programming Contest 2022 (organized by IIUCPS)",
      "9th out of 43 teams in IIUC Intra University Programming Contest 2022",
    ]
  }
];
