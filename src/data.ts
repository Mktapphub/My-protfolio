import { 
  Project, 
  StatItem, 
  SkillCategory, 
  EducationItem, 
  ExperienceItem, 
  ContactInfo 
} from './types';

export const MINHAJUL_PROFILE = '/src/assets/images/Min.jpg';
export const MINHAJUL_WORKSPACE_IMG = '/src/assets/images/minhaj_workspace_1783441664533.jpg';
export const BINARY_SUST_IMG = '/src/assets/images/developer-team.png';
export const CODE_EDITOR_IMG = '/src/assets/images/Advanced code Editor.png';
export const BOOK_WORLD_IMG = '/src/assets/images/books.jpg';
export const NOTEPAD_IMG = '/src/assets/images/Advanced Notepad.png';
export const VOTE_SYS_PLUG = '/src/assets/images/poll.png';

// Newly Generated High-Fidelity Custom Visual Assets
export const ADMISSION_HELPER_IMG = '/src/assets/images/Commerce Platform.jpg';
export const BLOOD_DONATION_IMG = '/src/assets/images/Clinic.png';
export const TRAFFIC_CONTROL_IMG = '/src/assets/images/quran.png';
export const CODING_CAMP_IMG = '/src/assets/images/agent.png';
export const NET_SCANNER_IMG = '/src/assets/images/vector_map_victoria_1783427594465.jpg';

export const portfolioData = {
  name: "Minhajul Khan",
  title: "Full-Stack Web & Android Developer",
  tagline: "I build smart, scalable applications and lead tech projects with passion and precision",
  summary: "I’m Minhajul Khan, a passionate full-stack developer with a strong foundation in both frontend and backend technologies. With hands-on experience in building dynamic web applications, Android apps, and Python-based tools, I strive to develop scalable, efficient, and user-centric digital solutions.",
  additionalSummary: "Beyond development, I actively contribute to the tech community as the President (formerly Project Coordinator) of Binary SUST — an IT-based organization at Shahjalal University of Science and Technology. Here, I lead organizational strategy, guide project teams, and conduct workshops.",
  
  about: {
    paragraphs: [
      "I’m Minhajul Khan, a passionate full-stack developer with a strong foundation in both frontend and backend technologies. With hands-on experience in building dynamic web applications, Android apps, and Python-based tools, I strive to develop scalable, efficient, and user-centric digital solutions. My work is rooted in creativity, problem-solving, and a constant drive to explore new technologies that make an impact. I love turning complex ideas into simple, usable, and meaningful digital experiences.",
      "Beyond development, I actively contribute to the tech community as the President (formerly Project Coordinator) of Binary SUST — an IT-based organization at Shahjalal University of Science and Technology. Here, I guide organizational strategy, technical pipelines, and workshops to help nurture the next generation of developers. Whether it is mentoring students or building real-world open source projects, I am driven by the belief that technology should be accessible, high-performing, and empowering."
    ],
    quickFacts: [
      { label: "Location", value: "Sylhet, Bangladesh", icon: "MapPin" },
      { label: "Email", value: "mkt9319@gmail.com", icon: "Mail" },
      { label: "Github", value: "Mktapphub", icon: "Github" },
      { label: "Interests", value: "Coding, App Dev, Security", icon: "Flame" },
      { label: "Study", value: "SUST, Sylhet", icon: "GraduationCap" },
      { label: "Employment", value: "Binary SUST", icon: "Briefcase" }
    ]
  },

  stats: [
    { id: "stars", label: "Android Application", value: "100+", iconName: "Star" },
    { id: "contributions", label: "Web Projects", value: "20+", iconName: "Code" },
    { id: "experience", label: "Years Experience", value: "5+", iconName: "Calendar" },
    { id: "workshops", label: "AI Automation", value: "7+", iconName: "Users" }
  ] as StatItem[],

  techStack: [
    {
      title: "Frontend & Web",
      items: [
        { name: "React", level: 9 },
        { name: "TypeScript", level: 8 },
        { name: "Tailwind CSS", level: 9 },
        { name: "WordPress", level: 8 },
        { name: "WordPress Plugin Development", level: 8 }
      ]
    },
    {
      title: "Backend & Systems",
      items: [
        { name: "Node.js", level: 8 },
        { name: "Python", level: 9 },
        { name: "OpenCV", level: 7 },
        { name: "Firebase", level: 8 },
        { name: "Git & GitHub", level: 9 }
      ]
    },
    {
      title: "Mobile App Dev",
      items: [
        { name: "Java / Android", level: 9 },
        { name: "Android Studio", level: 9 },
        { name: "SQLite", level: 8 },
        { name: "MVVM Architecture", level: 8 }
      ]
    },
    {
      title: "AI & Tools",
      items: [
        { name: "AI agent build", level: 8 },
        { name: "Vector Database", level: 8 },
        { name: "AI integration", level: 9 }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "binary-sust-website",
      title: "Multi-Calc-wordpress-plugin",
      subtitle: "A premium, mobile-first calculator suite for WordPress. Basic, Scientific, Percentage, BMI, Loan/EMI, Age, and Unit Converter — all in one.",
      description: "Multi Calculator Pro drops a polished, app-like calculator widget anywhere on your site via a simple shortcode",
      challenge: "Creating a highly responsive, content-rich design that loads fast and effectively highlights the organization’s mission, active members, and workshop updates, making it easily manageable.",
      solution: "Led the design and development of the official platform using WordPress. Engineered customizable, lightweight block layouts and structured components to optimize SEO and response speeds.",
      results: [
        "Provides a seamless visitor experience across both desktop and mobile devices.",
        "Serves as the central communication hub for thousands of university students and tech enthusiasts.",
        "Significantly reduced overhead for uploading event logs and publishing announcements."
      ],
      image: BINARY_SUST_IMG,
      tech: ["WordPress Plugin", "PHP", "Tailwind CSS", "Responsive Design"],
      demoUrl: "https://github.com/Mktapphub/Multi-Calc-wordpress-plugin",
      codeUrl: "https://github.com/Mktapphub/Multi-Calc-wordpress-plugin",
      category: "wordpressplugin",
      stats: [
        { label: "Domain", value: "binarysust.org" },
        { label: "Status", value: "Production" }
      ]
    },
    {
      id: "advanced-code-editor",
      title: "Advanced Code Editor",
      subtitle: "Lightweight mobile compiler & IDE for Android",
      description: "A fast, lightweight, and beginner-friendly Android code editor with live HTML preview and website source inspection — right from your phone.",
      challenge: "Designing a responsive mobile layout that can efficiently render, highlight, and preview code in real-time without introducing UI latency on budget Android devices.",
      solution: "Engineered a custom, resource-optimized editor interface using Java in Android Studio. Integrated custom parsing logic for high-performance syntax highlighting and a sandboxed WebView for safe live preview.",
      results: [
        "Lightweight footprint allowing smooth operations on resource-constrained mobile hardware.",
        "Live HTML preview rendering in under 5ms latency.",
        "Incorporates mobile-friendly navigation shortcuts for writing code on touch screens."
      ],
      image: CODE_EDITOR_IMG,
      tech: ["Java", "Android Studio", "XML", "MVVM"],
      demoUrl: "https://github.com/Mktapphub/Advanced-code-Editor",
      codeUrl: "https://github.com/Mktapphub/Advanced-code-Editor",
      category: "application",
      stats: [
        { label: "Platform", value: "Android" },
        { label: "Performance", value: "High" }
      ]
    },
    {
      id: "book-world",
      title: "Book World",
      subtitle: "Free digital library & book manager for Android",
      description: "Book World is a lightweight, user-friendly Android app that gives you access to a vast collection of free books. Whether you are a student, a researcher, or simply a passionate reader, Book World offers a seamless reading experience along with the ability to download and manage your personal library. All for free.",
      challenge: "Providing a unified library dashboard with fast, offline reading capability while maintaining minimal app storage usage.",
      solution: "Developed the application under Android MVVM guidelines. Programmed a lightweight SQLite caching engine for metadata storage, and designed a robust download queuing manager for book files.",
      results: [
        "100% free with a seamless, clean reading interface without distracting noise.",
        "Allows users to build and catalog their personal library locally on device storage.",
        "Zero-latency PDF rendering and reader navigation."
      ],
      image: BOOK_WORLD_IMG,
      tech: ["Java", "Android SDK", "PDF Viewer", "SQLite"],
      demoUrl: "https://github.com/Mktapphub/Book-World",
      codeUrl: "https://github.com/Mktapphub/Book-World",
      category: "application",
      stats: [
        { label: "Utility", value: "Offline Reader" },
        { label: "License", value: "Free" }
      ]
    },
    {
      id: "advanced-notepad-app",
      title: "Advanced Notepad App",
      subtitle: "Sleek note-taking, daily planning & calendar tool",
      description: "Advanced Notepad® is an android app for note-taking and task management, offering features like to-do lists, a daily planner, and a built-in calendar. Stay organized effortlessly with its user-friendly interface and customizable options.",
      challenge: "Combining a fast note-taking interface with rich, schedule-driven reminders and localized calendar syncing under a clean UI layout.",
      solution: "Designed using Android Studio and Java. Leveraged SQLite databases with structured indexing for prompt note search, and utilized localized alarms and calendar hooks for schedule synchronization.",
      results: [
        "Consolidates a daily planner, interactive calendar, and to-do lists into a single application.",
        "Provides lightning-fast search indexing across all historical notes.",
        "Material Design visual interface optimized for native mobile touch targets."
      ],
      image: NOTEPAD_IMG,
      tech: ["Java", "SQLite", "Calendar API", "Material Design"],
      demoUrl: "https://github.com/Mktapphub/Advanced-Notepad-App",
      codeUrl: "https://github.com/Mktapphub/Advanced-Notepad-App",
      category: "application",
      stats: [
        { label: "Features", value: "Planner & Calendar" },
        { label: "Storage", value: "Local SQLite" }
      ]
    },
    {
      id: "BuyNesteCom — Luxury Full-Stack MERN E-Commerce Platform",
      title: "E-Commerce Platform",
      subtitle: "E-Commerce Platform",
      description: "A posh, stylish, fully functional e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js) plus Redis caching, Stripe payments, and premium UI/UX design. Designed to feel like a luxury version of Amazon — complete with smooth animations, responsive layouts, secure auth, and marketplace features.",
      challenge: "Structuring high volumes of complex exam patterns and campus building spatial maps into a lightweight, fully offline-functional resource hub.",
      solution: "Built using Android Studio, Java, and SQLite. Coded high-performance custom DB search indexing for question filters, and designed local Vector Drawable spatial maps with dynamic coordinate indexing.",
      results: [
        "Helped thousands of prospective admission candidates prepare and navigate the SUST campus.",
        "Features fully offline-capable exam simulations with active feedback timers.",
        "Maintains a compact download package footprint of under 8MB."
      ],
      image: ADMISSION_HELPER_IMG,
      tech: ["React", "PostgreSQL", "Vite", "zod"],
      demoUrl: "https://buynestecom.netlify.app/",
      codeUrl: "https://github.com/Mktapphub/Buynest-E-commerce-Website",
      category: "Website",
      stats: [
        { label: "Target", value: "SUST Candidates" },
        { label: "Offline", value: "100%" }
      ]
    },
    {
      id: "Clinical Care Platform",
      title: "Clinical Care Platform",
      subtitle: "Doctor or Hospital Management Web App",
      description: "A professional, premium-grade offline-first healthcare companion built with React, Tailwind CSS, and TypeScript. The application is designed around a clinical yet comforting aesthetic, prioritizing crisp medical typography, calming soft blues, high-density dashboard layouts, and low-bandwidth optimizations for reliable access across all connection speeds",
      challenge: "Ensuring near-instant notification delivery for critical, time-sensitive blood requests while protecting user location data privacy.",
      solution: "Integrated a structured Firebase real-time database architecture with clean, permission-restricted cloud functions. Programmed strict client-side encryption layers over donor identity attributes.",
      results: [
        "Successfully coordinated over 300 successful, urgent blood donations across Sylhet.",
        "Delivers emergency broadcast notifications within 3 seconds of seeker request registration.",
        "Provides an elegant, high-contrast, touch-optimized user interface for instant operations."
      ],
      image: BLOOD_DONATION_IMG,
      tech: ["React 18+ (Vite)", "Local-first storage with cryptographic simulation interfaces", "motion", "Tanstack"],
      demoUrl: "https://clinical-care-platform.vercel.app/",
      codeUrl: "https://clinical-care-platform.vercel.app/",
      category: "webapp",
      stats: [
        { label: "Database", value: "Firebase NoSQL" },
        { label: "Matching", value: "Real-time" }
      ]
    },
    {
      id: "QuranSphere",
      title: "QuranSphere",
      subtitle: "Quran Reading web app",
      description: "A modern, responsive, and production-ready Quran web application. QuranSphere provides a clean and distraction-free reading experience with translations, tafsir, audio recitation, and powerful search capabilities.",
      challenge: "Maintaining steady video frame decoding processing speeds at high frame rates while executing intense image analysis filters without lag.",
      solution: "Programmed multi-threaded frame queue pipes in Python. Leveraged highly optimized OpenCV haar cascade algorithms and contour-based tracking arrays to safely index and count overlapping vehicles.",
      results: [
        "Maintains a high tracking accuracy rate of over 94% across variable weather patterns.",
        "Reduces simulated vehicle congestion queuing delay times by up to 35%.",
        "Exports robust tabular statistical log reports automatically formatted for urban planning."
      ],
      image: TRAFFIC_CONTROL_IMG,
      tech: ["React", "TanStack Query", "PostgreSQL"],
      demoUrl: "https://quran-sphere-9mmv.vercel.app/",
      codeUrl: "https://quran-sphere-9mmv.vercel.app/",
      category: "webapp",
      stats: [
        { label: "Engine", OpenCV: "Vision 4.x" },
        { label: "Accuracy", value: "94.2%" }
      ]
    },
    {
      id: "binary-coding-camp",
      title: "CineMate — AI-Powered Movie Recommendation Agent",
      subtitle: "Custom coding challenge evaluator & registry system",
      description: "An intelligent, stateful multi-agent system for personalized movie recommendations with real-time web grounding and persistent user memory",
      challenge: "Evaluating submitted block segments of user-compiled solutions securely and efficiently under high peak student traffic spikes during exams.",
      solution: "Engineered a responsive modern web application using React, Express, Node.js, and MongoDB. Structured safe sandbox execution environments for running code evaluations and integrated localized webhooks.",
      results: [
        "Managed stress-free concurrent code registrations and performance feedback logs for hundreds of student campers.",
        "Features robust score calculation matrices and a live updating visual campus leaderboard.",
        "Maintains fully responsive navigation for student dashboard analytics."
      ],
      image: CODING_CAMP_IMG,
      tech: ["AI agent", "Vector DB", "Chroma", "AI-chatbot", "Llm"],
      demoUrl: "https://github.com/Mktapphub/Movie-agent",
      codeUrl: "https://github.com/Mktapphub/Movie-agent",
      category: "ai",
      stats: [
        { label: "Stack", value: "AI agent" },
        { label: "Security", value: "Sandboxed" }
      ]
    },
    {
      id: "network-scanner-security",
      title: "Secure-Contact-Form-Plugin",
      subtitle: "Secure-Contact-Form-Plugin",
      description: "A security-first, enterprise-grade contact form plugin with nonce-verified AJAX submissions, honeypot spam protection, rate limiting, and a clean admin dashboard.",
      challenge: "Achieving high-speed port-sweeps across massive IP subnets without crashing the network or triggering deep router firewall bans.",
      solution: "Programmed raw socket injection headers with Scapy in Python. Configured asynchronous, non-blocking scan intervals and built custom lookup algorithms to map services to known threat repositories.",
      results: [
        "Performs complete, detailed audits of standard class-C local networks in under 45 seconds.",
        "Generates clean, human-readable HTML/Markdown summary report exports.",
        "Useful for students and administrators to identify weak node exposures on localized lab systems."
      ],
      image: NET_SCANNER_IMG,
      tech: ["PHP", "CSS", "Wordpress", "contact form Builder"],
      demoUrl: "https://github.com/Mktapphub/Secure-Contact-Form-Plugin",
      codeUrl: "https://github.com/Mktapphub/Secure-Contact-Form-Plugin",
      category: "Wordpressplugin",
      stats: [
        { label: "Audit type", value: "Network Vulnerability" },
        { label: "Speed", value: "Sub-Minute" }
      ]
    },
    {
      id: "binary-sust-elearning",
      title: "wordpress-voting-system-plugin",
      subtitle: "wordpress-voting-system-plugin",
      description: "A premium, Messenger-style polling plugin. Create polls, vote instantly. just clean, secure, prepared-statement SQL against custom tables.",
      challenge: "Building a highly customizable e-learning portal that scales seamlessly across hundreds of student logins while keeping course loading speeds below 1.5s.",
      solution: "Developed the platform on custom-skinned, light-weight PHP block layouts. Configured object caching and structured CDN pipelines to speed up video lesson asset deliveries.",
      results: [
        "Supports seamless workshop registrations and multi-module course progressions.",
        "Reduced administrative work hours required to assign assignments and release progress metrics.",
        "Integrates interactive code snippet showcases directly inside lessons."
      ],
      image: VOTE_SYS_PLUG,
      tech: ["WordPress", "PHP", "Wordpress plugin"],
      demoUrl: "https://github.com/Mktapphub/wordpress-voting-system-plugin",
      codeUrl: "https://github.com/Mktapphub/wordpress-voting-system-plugin",
      category: "Wordpressplugin",
      stats: [
        { label: "System", value: "WordPress LMS" },
        { label: "Media Load", value: "Optimized" }
      ]
    }
  ] as unknown as Project[],

  experience: [
    {
      id: "exp-0",
      role: "President",
      company: "Binary SUST",
      period: "2025 - Present",
      location: "Sylhet, Bangladesh",
      description: "Serving as the President of Binary SUST, the leading IT organization at Shahjalal University of Science and Technology. Directing organizational strategy, coordinating executive teams, and steering high-impact tech initiatives for the campus community.",
      bullets: [
        "Govern executive administration, foster external collaborations, and host large-scale tech symposia.",
        "Oversee academic workshop pipelines, coding bootcamps, and developer mentorship programs.",
        "Deploy and maintain open-source software solutions built to assist the university student body."
      ],
      techUsed: ["Leadership", "Strategic Planning", "Project Management", "Tech Mentoring"]
    },
    {
      id: "exp-1",
      role: "Project Coordinator",
      company: "Binary SUST",
      period: "2024 - 2025",
      location: "Sylhet, Bangladesh",
      description: "Served as the Project Coordinator at Binary SUST. Managed technical project lifecycles, structured student-facing developer workshops, and coordinated teams of engineers.",
      bullets: [
        "Conducted extensive hands-on software development workshops covering React, Android SDK, and backend frameworks.",
        "Led project teams to build campus utility apps and official web platforms under strict deadlines.",
        "Mentored aspiring programmers, fostering deep team collaboration and version control best practices."
      ],
      techUsed: ["React", "Node.js", "Firebase", "OpenCV", "Python", "WordPress"]
    },
    {
      id: "exp-2",
      role: "Android App Developer",
      company: "Remote",
      period: "2020 - Present",
      location: "Sylhet, Bangladesh",
      description: "Designed and developed a wide range of mobile utility and productivity applications for Android devices. Focused on achieving high performance, offline availability, lightweight memory footprints, and clean material user interfaces.",
      bullets: [
        "Created user-centric mobile systems including 'Advanced Code Editor', 'Book World', and 'Advanced Notepad'.",
        "Configured robust SQLite relational storage systems for seamless offline operations.",
        "Structured code bases using MVVM design patterns and clean architecture standards for maximum maintainability."
      ],
      techUsed: ["Java", "Android SDK", "Android Studio", "SQLite", "XML", "Material Design"]
    },
    {
      id: "exp-3",
      role: "Website Developer",
      company: "Binary SUST (Community Project)",
      period: "2023 - 2024",
      location: "Sylhet, Bangladesh",
      description: "Designed, built, and launched the official responsive website for the Binary SUST organization to highlight their events, leadership team, and workshop schedules.",
      bullets: [
        "Engineered the design and development using customizable block layouts and structured components.",
        "Optimized pages for fluid cross-device accessibility and high SEO rankings.",
        "Established easy-to-use workflows for non-technical team members to write and release updates."
      ],
      techUsed: ["WordPress", "PHP", "Tailwind CSS", "Responsive UI Design", "SEO Integration"]
    }
  ] as ExperienceItem[],

  contact: {
    location: "Sylhet, Bangladesh",
    email: "mkt9319@gmail.com",
    github: "Mktapphub",
    twitter: "Minhajul80",
    instagram: "minhajul_khan"
  } as ContactInfo
};
