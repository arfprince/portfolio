import { Project, Skill, Experience, Education } from '@/types';

export const personalInfo = {
  name: "Md. Armanur Rahman Faisal Prince",
  title: "Software Engineer",
  email: "parmanurrahmanfaisal@gmail.com",
  phone: "+8801521528257",
  location: "Chittagong, Bangladesh",
  bio: "Passionate Computer Science student at IIUC with expertise in full-stack web development, competitive programming, and building innovative solutions. Experienced in React, Next.js, Node.js, and modern web technologies.",
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
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Express.js", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 78, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "REST APIs", level: 88, category: "backend" },
  
  // DevOps
  { name: "Docker", level: 75, category: "devops" },
  { name: "AWS", level: 70, category: "devops" },
  { name: "CI/CD", level: 72, category: "devops" },
  { name: "Git", level: 90, category: "devops" },
  { name: "Linux", level: 78, category: "devops" },
  { name: "Kubernetes", level: 65, category: "devops" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Recipe Book",
    description: "A comprehensive recipe management application where users can browse, search, and save their favorite recipes. Features include ingredient lists, step-by-step instructions, and nutritional information.",
    image: "/assets/project1.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://recipe-boo-k.vercel.app/",
    githubUrl: "https://github.com/arfprince/recipe-book",
    category: "fullstack"
  },
  {
    id: "2",
    title: "My Blog Platform",
    description: "A personal blogging platform with modern design and features including markdown support, categories, tags, and comment system. Built for sharing thoughts and technical articles.",
    image: "/assets/project2.jpg",
    technologies: ["Next.js", "React", "MDX", "Tailwind CSS"],
    liveUrl: "https://my-blog-lime-eta.vercel.app/",
    githubUrl: "https://github.com/arfprince/my-blog",
    category: "fullstack"
  },
  {
    id: "3",
    title: "Favourite Memes",
    description: "An entertaining meme collection website with different themes, allowing users to browse and enjoy a curated collection of memes with a beautiful UI.",
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
  // {
  //   id: "5",
  //   title: "Competitive Programming Solutions",
  //   description: "A collection of my solutions to various competitive programming problems from platforms like Codeforces, CodeChef, AtCoder, and LeetCode.",
  //   image: "/assets/project5.jpg",
  //   technologies: ["C++", "Python", "Algorithms", "Data Structures"],
  //   githubUrl: "https://github.com/arfprince",
  //   category: "backend"
  // },
  // {
  //   id: "6",
  //   title: "Web Development Projects",
  //   description: "Various web development projects showcasing different technologies and frameworks, from simple static sites to complex web applications.",
  //   image: "/assets/project6.jpg",
  //   technologies: ["React", "Node.js", "Express", "MongoDB"],
  //   githubUrl: "https://github.com/arfprince",
  //   category: "fullstack"
  // }
];

export const experiences: Experience[] = [
  {
    id: "1",
    position: "Junior Software Engineer",
    company: "Appifylab",
    duration: "2024 - Present",
    description: [
      "Developed multiple web applications using modern frameworks",
      "Built responsive and user-friendly interfaces",
      "Deployed projects on Vercel and Cloudflare Pages",
      "Implemented RESTful APIs and database integration"
    ],
    technologies: ["React", "Next.js", "Node.js", "Tailwind CSS"]
  },
  {
    id: "2",
    position: "Competitive Programmer",
    company: "Multiple Platforms",
    duration: "2020 - Present",
    description: [
      "Active participant on Codeforces, CodeChef, AtCoder, and LeetCode",
      "Solved 500+ algorithmic problems across various platforms",
      "Consistently improving problem-solving and algorithmic thinking skills",
      "Participated in multiple online programming contests"
    ],
    technologies: ["C++", "Python", "Algorithms", "Data Structures"]
  },
  {
    id: "3",
    position: "Computer Science Student",
    company: "IIUC",
    duration: "2021 - Present",
    description: [
      "Studying core CS subjects including Data Structures, Algorithms, and Software Engineering",
      "Actively participating in university programming contests",
      "Collaborating on group projects and assignments",
      "Learning and applying theoretical concepts to practical projects"
    ],
    technologies: ["Java", "C++", "Python", "Web Technologies"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "International Islamic University Chittagong (IIUC)",
    duration: "2021 - Present",
    description: "Currently pursuing degree with focus on Software Engineering, Algorithms, and Web Development"
  }
];
