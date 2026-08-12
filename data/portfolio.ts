export const personalInfo = {
  name: "Romy Pablo",
  role: "Creative Developer & Designer",
  tagline: "BUILDING DIGITAL EXPERIENCES THAT MATTER.",
  description: "I'm a creative developer focused on creating thoughtful digital products, immersive interfaces, and high-performance web experiences.",
  email: "romspablo@gmail.com",
  location: "Philippines",
  availability: "Available for Projects",
  
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    dribbble: "https://dribbble.com/yourusername",
  },

  about: {
    intro: "I'm a creative developer and designer with a passion for crafting digital experiences that merge aesthetic excellence with technical precision.",
    story: "With over 8 years of experience, I've worked with startups and established brands to bring their digital visions to life. My approach combines strategic thinking, modern development practices, and an obsessive attention to detail.",
    focus: [
      "Building scalable, performant web applications",
      "Designing intuitive user interfaces",
      "Creating immersive digital experiences",
      "Bridging the gap between design and development"
    ],
    stats: [
      { label: "Years Experience", value: "8+" },
      { label: "Projects Completed", value: "120+" },
      { label: "Happy Clients", value: "45+" },
      { label: "Lines of Code", value: "500K+" }
    ]
  }
};

export const skills = {
  "Frontend Development": [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Three.js",
    "Vue.js",
    "GSAP"
  ],
  "Backend Development": [
    "Node.js",
    "Express",
    "Python",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "REST APIs"
  ],
  "UI/UX Design": [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Prototyping",
    "User Research",
    "Design Systems",
    "Brand Identity",
    "Motion Design"
  ],
  "Creative Development": [
    "WebGL",
    "Canvas API",
    "SVG Animation",
    "Generative Art",
    "Interactive Experiences",
    "3D Graphics"
  ],
  "AI & Automation": [
    "OpenAI API",
    "Machine Learning",
    "Automation Scripts",
    "AI Integration",
    "Data Processing"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Neural Commerce",
    description: "AI-powered e-commerce platform that personalizes shopping experiences using machine learning algorithms.",
    category: "Web Application",
    year: "2024",
    image: "/projects/project1.jpg", // Placeholder
    technologies: ["Next.js", "TypeScript", "TensorFlow", "PostgreSQL"],
    link: "#"
  },
  {
    id: 2,
    title: "Pulse Studio",
    description: "A creative agency website featuring immersive 3D interactions and smooth scroll animations.",
    category: "Creative Website",
    year: "2024",
    image: "/projects/project2.jpg", // Placeholder
    technologies: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 3,
    title: "Zenith Dashboard",
    description: "Enterprise analytics dashboard with real-time data visualization and custom reporting tools.",
    category: "Web Application",
    year: "2023",
    image: "/projects/project3.jpg", // Placeholder
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 4,
    title: "Velocity Fitness",
    description: "Mobile-first fitness tracking app with personalized workout plans and progress analytics.",
    category: "Mobile App",
    year: "2023",
    image: "/projects/project4.jpg", // Placeholder
    technologies: ["React Native", "Firebase", "TypeScript"],
    link: "#"
  }
];

export const experience = [
  {
    company: "Flux Digital",
    position: "Senior Frontend Developer",
    period: "2022 - Present",
    description: "Leading frontend development for high-profile clients, building scalable web applications and design systems.",
    achievements: [
      "Architected and delivered 15+ production applications",
      "Reduced average page load time by 60%",
      "Mentored junior developers and established best practices"
    ]
  },
  {
    company: "Pixel Paradigm",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Developed end-to-end solutions for startups and enterprise clients, from concept to deployment.",
    achievements: [
      "Built MVP for 3 successful startup launches",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Created reusable component library used across 10+ projects"
    ]
  },
  {
    company: "Creative Lab Co.",
    position: "Frontend Developer",
    period: "2018 - 2020",
    description: "Crafted interactive web experiences and responsive interfaces for creative agency clients.",
    achievements: [
      "Delivered 30+ client projects on time and within budget",
      "Won agency's Innovation Award for experimental web project",
      "Increased client satisfaction scores by 25%"
    ]
  }
];

export const services = [
  {
    title: "Web Development",
    description: "Building fast, scalable, and modern web applications using cutting-edge technologies.",
    icon: "code"
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces that prioritize user experience.",
    icon: "palette"
  },
  {
    title: "Creative Development",
    description: "Creating immersive digital experiences with advanced animations and interactions.",
    icon: "sparkles"
  },
  {
    title: "AI Integration",
    description: "Integrating AI and machine learning capabilities into web applications.",
    icon: "brain"
  },
  {
    title: "Brand Identity",
    description: "Crafting cohesive brand identities that resonate with your target audience.",
    icon: "target"
  },
  {
    title: "Performance Optimization",
    description: "Optimizing websites for speed, accessibility, and search engine visibility.",
    icon: "zap"
  }
];
