export const portfolioData = {
  personalInfo: {
    name: "Syed Imran",
    title: "Software Engineer",
    bio: "Specialized in creating robust software solutions with a focus on scalability and performance. With expertise in full-stack development, I build applications that solve real-world problems through innovative approaches and clean code.",
    email: "syed16imran@gmail.com",
    location: "Suri, India",
    socialLinks: {
      github: "https://github.com/ImranDesk",
      linkedin: "https://www.linkedin.com/in/imrandesk/",
      twitter: "#",
    },
  },

  skills: [
    {
      category: "Frontend",
      technologies: [
        "React",
        "Three.js",
        "WebGL",
        "Framer Motion",
        "Next.js",
        "UI/UX Design",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "RESTful APIs",
        "Machine Learning",
        "Cloud Functions",
        "GraphQL",
      ],
    },
    {
      category: "Design",
      technologies: [
        "Responsive Design",
        "Motion Graphics",
        "3D Modeling",
        "Parametric Interfaces",
        "AR/VR",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Disease-prediction-system using machine learning",
      description:
        "A system that takes inputs of symptoms from user and predicts the possible desease he might be suffering from using machine learning algorithms.",
      image: "neurosync.jpg",
      technologies: ["Python", "Scikit-Learn", "Flask", "Scipy"],
      github: "https://github.com/ImranDesk/Disease-prediction-system",
      liveDemo: "#",
    },
    {
      id: 2,
      title: "Responsive Landing Page",
      description:
        "Responsive static website using HTML, CSS, SCSS JavaScript.",
      image: "landing.png",
      technologies: ["HTML, CSS, SCSS, JavaScript"],
      github: "https://github.com/ImranDesk/landing-page-2",
      liveDemo: "https://imrandesk.github.io/landing-page-2/",
    },
    {
      id: 4,
      title: "Education Website",
      description:
        "A website of a coaching academy created with HTML, SCSS, Bootstrap, PHP and MySql.",
      image: "biodigital.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySql"],
      github: "#https://github.com/ImranDesk/academic-excellence",
      liveDemo: "#",
    },
    
  ],

  experience: [
    {
      company: "Runway Technologies.",
      position: "Software Developer",
      period: "2021 - 2022",
      description:
        "Heading the development of next-generation applications that combine innovative technologies with robust software engineering practices.",
    },
    {
      company: "National Informatics Centre",
      position: "Fullstack Developer",
      period: "2022 - 2023",
      description:
        "Developed scalable software solutions for enterprise clients, focusing on performance optimization and system architecture.",
    },
  ],

  testimonials: [
    {
      name: "Dr. Elara Chen",
      position: "Director of Innovation, TechFuture Labs",
      text: "Syed's work on our interface project redefined what we thought was possible in human-computer interaction. The intuitive design made complex technology accessible to everyone.",
    },
    {
      name: "Kai Nakamura",
      position: "CEO, Holographic Environments",
      text: "The software solutions developed by Syed transformed our approach to architectural visualization. Our clients can now literally step into their future spaces before they're built.",
    },
    {
      name: "Dr. Miranda Webb",
      position: "Lead Researcher, Technology Initiative",
      text: "Syed has a rare ability to translate incredibly complex concepts into interfaces that researchers and students alike can understand and use effectively.",
    },
  ],

  education: [
    {
      institution: "SSRKV High School",
      degree: "High School",
      period: "Secondary and Higher Secondary",
    },
    {
      institution: "Birbhum Institute of Engineering & Technology",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2017 - 2021",
    },
    {
      institution: "Seacom Skills University",
      degree: "M.Tech in Computer Science & Engineering",
      period: "2023 - 2025",
    },
  ],
};
