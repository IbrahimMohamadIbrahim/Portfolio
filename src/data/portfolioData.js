export const getAssetUrl = (path) => {
  if (!path) return '';
  if (/^(?:https?:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  if (path.startsWith(base)) {
    return path;
  }

  const cleanPath = path.replace(/^\/+/, '');
  const baseNoSlash = base.replace(/^\/+|\/+$/g, '');
  if (baseNoSlash && cleanPath.startsWith(`${baseNoSlash}/`)) {
    return `/${cleanPath}`;
  }

  return `${base}${cleanPath}`;
};

export const developer = {
  name: "Ibrahim Mohamad",
  shortName: "Ibrahim",
  role: "Data Science & Frontend Developer",
  specialization: "Data Science, Front-End",
  currentFocus: "Data Analysis & Predictive Modeling",
  headline: "Turning Data into Insights & Ideas into Web Experiences",
  bio: "A developer focused on Data Science, Machine Learning, and Frontend Development. I clean and analyze data, build and evaluate predictive models, and create responsive web interfaces using modern technologies.",
  location: "Worldwide Remote",
  email: "ibrahimmohamad12.123@gmail.com",
  phone: "01501941230",
  status: "Available for new opportunities",
  availabilityText: "Open to Data Science roles, Machine Learning engineering, and Frontend Development projects.",
  github: "https://github.com/IbrahimMohamadIbrahim",
  linkedin: "https://www.linkedin.com/in/ibrahim-mohamad-ibrahim",
  twitter: "https://x.com/Ibrahim3Mohamad",
  resumeUrl: "#resume",
  photo: getAssetUrl('images/profile.png'),
  stats: [
    { label: "Submitted Projects", value: "3 Real Works" },
    { label: "Core Competencies", value: "Data & Web" },
    { label: "Tech Stack", value: "Python / JS" },
    { label: "Dedication & Precision", value: "100%" },
  ]
};

export const services = [
  {
    id: "data-analysis",
    title: "Data Analysis & Science",
    description: "Cleaning, preprocessing, and analyzing complex datasets to extract actionable insights, discover hidden patterns, and empower data-driven decisions.",
    icon: "BarChart3",
    skills: ["Data Cleaning", "Data Analysis", "SQL", "Python", "EDA", "Data Visualization"]
  },
  {
    id: "ml-predictive",
    title: "Predictive Modeling & Machine Learning",
    description: "Designing, training, and evaluating predictive machine learning models to forecast operational outcomes, identify anomalies, and prevent equipment failures.",
    icon: "Cpu",
    skills: ["Python", "Machine Learning", "Deep Learning", "Anomaly Detection", "Model Evaluation"]
  },
  {
    id: "frontend",
    title: "Responsive Web Development & UI/UX",
    description: "Crafting beautiful, modern, and accessible website interfaces using HTML5, CSS3, JavaScript, React, and Tailwind CSS with smooth interactions.",
    icon: "Layout",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"]
  },
  {
    id: "agency-solutions",
    title: "Tech Agency & Landing Pages",
    description: "Designing high-converting digital storefronts and professional agency landing pages optimized for Web Design, Mobile Apps, and Data Analytics.",
    icon: "Palette",
    skills: ["Web Design", "App Showcase", "Data Presentation", "Pure CSS", "Performance"]
  }
];

export const projects = [
  {
    id: "industrial-predictive-maintenance",
    title: "Industrial Predictive Maintenance",
    subtitle: "Sensor telemetry failure forecasting & predictive maintenance system",
    category: "Cloud & AI",
    badge: "Predictive ML",
    featured: true,
    year: "2024",
    image: getAssetUrl('images/predictive-maintenance.png'),
    summary: "Instead of waiting for a machine to fail, we use its sensor data to predict the possibility of failure early and help with maintenance decisions.",
    description: "The main idea was pretty simple: instead of waiting for a machine to fail, we use its sensor data to predict the possibility of failure early and help with maintenance decisions. During the project, we worked with Python, SQL, Machine Learning, Deep Learning, Anomaly Detection, RAG, and Streamlit and connected them together into one complete system.",
    metrics: "End-to-end failure risk prediction with ML, Deep Learning & Streamlit dashboard",
    stack: ["Python", "SQL", "Machine Learning", "Deep Learning", "Anomaly Detection", "Streamlit"],
    features: [
      "Sensor data ingestion analyzing rotational speed, torque, air and process temperatures, and tool wear",
      "Machine failure risk estimation using advanced Machine Learning and Deep Learning models",
      "Anomaly detection pipeline to flag operational deviations before catastrophic failure occurs",
      "Interactive Streamlit control dashboard for real-time sensor parameter input and failure scoring"
    ],
    demoUrl: "https://github.com/IbrahimMohamadIbrahim/industrial-predictive-maintenance",
    githubUrl: "https://github.com/IbrahimMohamadIbrahim/industrial-predictive-maintenance",
    color: "from-[#0077b6]/20 via-[#00b4d8]/20 to-[#90e0ef]/10"
  },
  {
    id: "cyborg-company",
    title: "Cyborg Company",
    subtitle: "Gaming interface and digital entertainment web platform",
    category: "Frontend",
    badge: "Personal Milestone",
    featured: true,
    year: "2024",
    image: getAssetUrl('images/cyborg-company.png'),
    summary: "This project is a simple website interface, but for me, it means a lot—it's the result of hours of learning, practicing, struggling, and finally seeing something I built come to life on the screen.",
    description: "This project is a simple website interface, but for me, it means a lot—it's the result of hours of learning, practicing, struggling, and finally seeing something I built come to life on the screen.",
    metrics: "Responsive gaming UI showcase built with passion and precision",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    features: [
      "Cyberpunk-inspired dark theme with glowing neon visual elements",
      "Categorized game browsing showcase with featured and popular titles",
      "Interactive search bar and responsive navigation structure",
      "Fluid multi-device layout across mobile and desktop screens"
    ],
    demoUrl: "https://github.com/IbrahimMohamadIbrahim/Cyborg-Company",
    githubUrl: "https://github.com/IbrahimMohamadIbrahim/Cyborg-Company",
    color: "from-[#03045e]/20 via-[#0077b6]/20 to-[#00b4d8]/10"
  },
  {
    id: "pwm-tech-agency",
    title: "PWM (Professional Websites Maker)",
    subtitle: "Landing page for a tech agency specializing in Web, Apps, ML, and Data",
    category: "Frontend",
    badge: "Agency Landing",
    featured: true,
    year: "2024",
    image: getAssetUrl('images/pwm-tech.png'),
    summary: "PWM (Professional Websites Maker) - A professional landing page for a tech agency specializing in Web Design, App Development, Machine Learning, and Data Analysis. Built with HTML and CSS.",
    description: "PWM (Professional Websites Maker) - A professional landing page for a tech agency specializing in Web Design, App Development, Machine Learning, and Data Analysis. Built with HTML and CSS.",
    metrics: "Zero-dependency pure HTML/CSS architecture with instant page load",
    stack: ["HTML5", "CSS3", "Web Design", "App Development", "Machine Learning", "Data Analysis"],
    features: [
      "Cosmic space galaxy visual hero backdrop with action buttons",
      "Comprehensive service display (Web Design, App Development, ML, Data Analysis)",
      "Structured section hierarchy (About, Portfolio, Services, Prices, Team, Contact)",
      "Ultra-lightweight pure CSS layout ensuring instant load times"
    ],
    demoUrl: "https://github.com/IbrahimMohamadIbrahim/Professional-Website-Maker",
    githubUrl: "https://github.com/IbrahimMohamadIbrahim/Professional-Website-Maker",
    color: "from-[#0077b6]/20 via-[#03045e]/20 to-[#00b4d8]/10"
  }
];

export const skillsData = {
  dataScience: [
    { name: "Data Cleaning & Preprocessing", level: 95, icon: "Sparkles" },
    { name: "Exploratory Data Analysis (EDA)", level: 94, icon: "LineChart" },
    { name: "Python (Pandas / NumPy / Scikit-Learn)", level: 95, icon: "Code" },
    { name: "Machine Learning & Predictive Modeling", level: 92, icon: "Cpu" },
    { name: "Deep Learning & Neural Networks", level: 88, icon: "Layers" },
    { name: "SQL & Relational Databases", level: 90, icon: "Database" },
  ],
  frontend: [
    { name: "HTML5 / Semantic Markup", level: 96, icon: "FileCode" },
    { name: "CSS3 / Modern Flexbox & Grid Layouts", level: 95, icon: "Palette" },
    { name: "JavaScript (ES6+)", level: 90, icon: "Code" },
    { name: "Responsive & Mobile-First Design", level: 96, icon: "Smartphone" },
    { name: "React 19 & Component Architecture", level: 88, icon: "Layers" },
    { name: "Tailwind CSS v4", level: 92, icon: "Sparkles" },
  ],
  toolsAndWorkflow: [
    { name: "GitHub & Version Control", level: 96, icon: "Github" },
    { name: "Git & Collaborative GitHub Flow", level: 94, icon: "GitBranch" },
    { name: "Streamlit Web Applications", level: 94, icon: "Layout" },
    { name: "Model Evaluation & Performance Metrics", level: 90, icon: "CheckCircle2" },
    { name: "Sensor Telemetry & Time Series Data", level: 88, icon: "Box" },
    { name: "Vite & Modern Frontend Tooling", level: 90, icon: "Wrench" },
  ],
  designAndArchitecture: [
    { name: "UI/UX & Interactive Design", level: 92, icon: "Palette" },
    { name: "Clean Architecture & Modular Code", level: 94, icon: "Shield" },
    { name: "Turning Insights into Interfaces", level: 95, icon: "Cpu" },
    { name: "Web Performance & Fast Loading", level: 92, icon: "Gauge" },
  ]
};

export const aboutProjectDetails = {
  title: "About This Portfolio Project",
  headline: "A modern showcase engineered with React 19 and Tailwind CSS v4",
  intro: "This portfolio was purposefully architected to reflect modern engineering standards: an iconic Coolors blue palette (#03045e, #0077b6, #00b4d8, #90e0ef, #caf0f8), instant single-page navigation, clean modular components, and real project case studies.",
  goals: [
    {
      title: "Harmonious Visual Identity",
      description: "Customized color palette directly inspired by personal coastal photography and the Coolors oceanic palette."
    },
    {
      title: "Showcase Real-World Data Science & Web",
      description: "Presents real projects spanning Industrial Predictive Maintenance, sensor anomaly detection, Cyborg Company, and PWM tech agency."
    },
    {
      title: "Harness Tailwind CSS v4 Performance",
      description: "Employs Tailwind's next-generation engine with custom CSS theme tokens, zero runtime overhead, and responsive fluid grids."
    },
    {
      title: "Seamless Interactive User Experience",
      description: "Fluid transitions, instant search filtering across projects, modal deep dives with screenshots, and responsive layout for all screen sizes."
    }
  ],
  techStackHighlights: [
    {
      name: "React 19",
      role: "UI Library & Component Engine",
      description: "Powers component modularity, declarative state handling, and fast virtual DOM reconciliation.",
      badge: "v19.2"
    },
    {
      name: "Tailwind CSS v4",
      role: "Styling & Design System",
      description: "Next-gen engine enabling custom Coolors theme tokens, utility-first styling, and clean responsive rules.",
      badge: "v4.3"
    },
    {
      name: "Vite 8",
      role: "Build Tool & Dev Server",
      description: "Delivers sub-second Hot Module Replacement (HMR) and optimized, tree-shaken production bundles.",
      badge: "v8.3"
    },
    {
      name: "React Router v7",
      role: "Client-Side Routing",
      description: "Provides frictionless transitions between Home, Projects, About, and Contact pages with active link awareness.",
      badge: "v7.1"
    },
    {
      name: "Lucide React",
      role: "Iconography System",
      description: "Clean, tree-shakable vector icons harmonized with typography and interactive states.",
      badge: "Latest"
    }
  ],
  architectureOverview: [
    {
      title: "Single Source of Truth Data Layer",
      description: "All projects, case studies, technologies, and developer details are organized in modular data structures, allowing easy updates."
    },
    {
      title: "Modular Layout & Navigation",
      description: "A centralized Layout component wraps all views with a frosted-glass sticky navbar and comprehensive footer."
    },
    {
      title: "Interactive State & Project Modals",
      description: "Live filtering by category, text search, high-res screenshot previews, and deep-dive technical modal inspections."
    },
    {
      title: "Accessibility & Mobile-First Design",
      description: "Optimized contrast ratios, semantic HTML5, keyboard navigation, and responsive behavior from mobile to 4K displays."
    }
  ],
  metrics: [
    { label: "Performance Score", value: "100" },
    { label: "Accessibility (a11y)", value: "100" },
    { label: "Best Practices", value: "100" },
    { label: "Responsive Design", value: "100" }
  ]
};

export const timeline = [
  {
    year: "2026",
    role: "Advanced Data Science Training",
    company: "TechTrek · Alexandria University (140 Hours)",
    description: "Completed 140 hours of rigorous professional training covering data science pipelines, exploratory data analysis, and predictive machine learning models."
  },
  {
    year: "2026",
    role: "Front-end Web Development Diploma (React JS)",
    company: "SEF Academy (Score: 97.38%)",
    description: "Completed intensive 5-month diploma specializing in advanced React JS component architecture, state management, and modern responsive UI engineering."
  },
  {
    year: "2026",
    role: "Frontend Fundamentals Course",
    company: "Code Spark Academy (30 Hours)",
    description: "Completed 30 hours of foundational training in modern HTML5 semantic structure, responsive CSS layout architecture, and web design fundamentals."
  }
];

export const faqList = [
  {
    question: "What is your main technical focus and expertise?",
    answer: "I specialize in Data Science, Machine Learning, and Frontend Development. I clean and analyze data, build and evaluate predictive models, and create responsive web interfaces using modern technologies."
  },
  {
    question: "Can you build both predictive models and web interfaces?",
    answer: "Yes! That is one of my core strengths—connecting data pipelines, SQL, and machine learning models with accessible, responsive user interfaces into one complete system."
  },
  {
    question: "How did you build the Industrial Predictive Maintenance system?",
    answer: "It uses sensor telemetry data (temperatures, rotational speeds, torque, tool wear) to train ML and Deep Learning models that predict failure risk, combined with Anomaly Detection in Streamlit."
  },
  {
    question: "Are you available for freelance projects or full-time roles?",
    answer: "Yes, I am actively open to engineering roles, Data Science opportunities, and Frontend development collaborations. Feel free to reach out through the Contact page or via GitHub!"
  }
];

export const certificates = [
  {
    id: "techtrek-data-science",
    title: "Advanced Data Science",
    issuer: "TechTrek · Alexandria University",
    category: "Data & ML",
    date: "2026",
    credentialId: "CERT_000540",
    image: getAssetUrl('certificates/advanced-data-science-techtrek.jpg'),
    link: getAssetUrl('certificates/advanced-data-science-techtrek.pdf'),
    downloadUrl: getAssetUrl('certificates/advanced-data-science-techtrek.pdf'),
    description: "Certificate of Professional Training awarded for successfully completing 140 hours of online professional training in Advanced Data Science offered by TechTrek in partnership with Alexandria University Faculty of Computer Science.",
    skills: ["Data Science", "Python", "Data Analysis", "Machine Learning", "Model Evaluation", "EDA"],
    badgeColor: "from-[#0077b6]/30 to-[#00b4d8]/20"
  },
  {
    id: "sef-frontend-diploma",
    title: "Front-end Web Development Diploma (React JS)",
    issuer: "SEF Academy (Software Engineering Future)",
    category: "Frontend & UI",
    date: "2026",
    credentialId: "284222001533",
    image: getAssetUrl('certificates/frontend-diploma-reactjs-sef.png'),
    link: getAssetUrl('certificates/frontend-diploma-reactjs-sef.pdf'),
    downloadUrl: getAssetUrl('certificates/frontend-diploma-reactjs-sef.pdf'),
    description: "Certificate of Completion awarded for successfully completing the 5-month intensive Front-end Web Development Diploma (React JS) at SEF Academy with an outstanding score of 97.38%.",
    skills: ["React JS", "JavaScript", "HTML5", "CSS3", "Responsive UI", "Component Architecture"],
    badgeColor: "from-[#00b4d8]/30 to-[#90e0ef]/30"
  },
  {
    id: "codespark-frontend-fundamentals",
    title: "Frontend Fundamentals Course",
    issuer: "Code Spark Academy",
    category: "Frontend & UI",
    date: "2026",
    credentialId: "CS-FE-2026",
    image: getAssetUrl('certificates/frontend-fundamentals-codespark.png'),
    link: getAssetUrl('certificates/frontend-fundamentals-codespark.pdf'),
    downloadUrl: getAssetUrl('certificates/frontend-fundamentals-codespark.pdf'),
    description: "Certificate of Completion presented for successfully completing the Frontend Fundamentals Course with a total study duration of 30 hours at Code Spark Academy.",
    skills: ["HTML5", "CSS3", "Web Fundamentals", "Responsive Design", "UI Basics"],
    badgeColor: "from-[#90e0ef]/40 to-[#caf0f8]"
  }
];
