export const projectsData = [
  {
    id: 1,
    title: "ClassSync",
    category: "web",
    tagline: "Educational Platform for Class Management",
    shortDescription: "A scalable PWA serving 20,000+ users with real-time communication and role-based access control.",
    fullDescription: "Architected and deployed a scalable Progressive Web App to serve 20,000+ users and support 1,000+ concurrent users with less than 2 second page load time. Secured application via Role-Based Access Control (RBAC) and managed Vercel CI/CD, ensuring 99.9% production uptime. Developed high-reliability communication using Firebase Cloud Messaging (FCM), achieving less than 500ms data synchronization and scoring 90+ on Google Lighthouse.",
    metrics: [
      { label: "Active Users", value: "20K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Page Load", value: "<2s" },
      { label: "Lighthouse", value: "90+" }
    ],
    tech: ["React", "Firebase", "PWA", "Vercel", "FCM", "JavaScript"],
    color: "cyan",
    neonColor: "#00F5FF",
    image: "images/classsync/cs0.png",
    // Add multiple screenshots here
    screenshots: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      // Add your real screenshot URLs here
    ],
    liveLink: "https://your-classsync-link.com",
    github: "https://github.com/yourusername/classsync",
    highlights: [
      "Real-time data synchronization with <500ms latency",
      "Role-Based Access Control (RBAC) for security",
      "Vercel CI/CD pipeline with 99.9% uptime",
      "Google Lighthouse score of 90+",
      "Supports 1,000+ concurrent users"
    ]
  },
  {
    id: 2,
    title: "UniRide",
    category: "mobile",
    tagline: "Campus Ride-Sharing Platform",
    shortDescription: "Real-time ride matching app with optimized data layer, reducing Firebase reads by 60%.",
    fullDescription: "Optimized Data Layer with intelligent caching, reducing Firebase reads by 60% and achieving a sub-3 second app launch time. Engineered secure, real-time matching via Supabase WebSockets and Row Level Security, maintaining less than 500ms latency and less than 50ms average query speeds. Refactored navigation flow to consolidate logic, eliminating race conditions and achieving a 70% reduction in redundant queries.",
    metrics: [
      { label: "Firebase Reduction", value: "60%" },
      { label: "Launch Time", value: "<3s" },
      { label: "Latency", value: "<500ms" },
      { label: "Query Speed", value: "<50ms" }
    ],
    tech: ["Flutter", "Dart", "Supabase", "Firebase", "WebSockets", "RLS"],
    color: "purple",
    neonColor: "#B026FF",
    image: "images/uniride/us0.png",
    screenshots: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&q=80",
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
    ],
    downloadLink: "https://drive.google.com/your-uniride-apk",
    github: "https://github.com/yourusername/uniride",
    highlights: [
      "60% reduction in Firebase reads with smart caching",
      "Sub-3 second app launch time",
      "Real-time WebSocket matching with <500ms latency",
      "Supabase Row Level Security for data protection",
      "70% reduction in redundant queries"
    ]
  },
  {
    id: 3,
    title: "DIURecycle",
    category: "mobile",
    tagline: "Campus Marketplace & Recycling Platform",
    shortDescription: "Full-stack marketplace with 70% bandwidth reduction through optimized media handling.",
    fullDescription: "Engineered full-stack solution using Flutter and Firebase. Utilized Cloudinary and compression algorithms to achieve 70% bandwidth reduction on media uploads. Optimized discovery interface using Reactive Streams and paginated queries to minimize data usage and deliver less than 1 second chat latency. Implemented all core features including secure authentication, multi-step forms, and Geolocation APIs for mapping.",
    metrics: [
      { label: "Bandwidth Saved", value: "70%" },
      { label: "Chat Latency", value: "<1s" },
      { label: "Media Compression", value: "Optimized" },
      { label: "Real-time", value: "Streams" }
    ],
    tech: ["Flutter", "Firebase", "Cloudinary", "Geolocation", "Dart"],
    color: "green",
    neonColor: "#00FF85",
    image: "/images/diurecycle/s0.png",
    screenshots: [
     '/images/diurecycle/i1.png',
     '/images/diurecycle/i2.png',
     '/images/diurecycle/i3.png',
     '/images/diurecycle/i4.png',
     '/images/diurecycle/i6.png',
     '/images/diurecycle/i5.png'
     
    ],
    github: "https://github.com/syedsabbir-git/DIU-Recycle",
    highlights: [
      "70% bandwidth reduction with Cloudinary compression",
      "Less than 1 second chat latency",
      "Reactive Streams for optimized discovery",
      "Geolocation API integration for mapping",
      "Multi-step form with secure authentication"
    ]
  }
];

export const categories = [
  { id: "all", label: "All Projects", icon: "🚀" },
  { id: "web", label: "Web Apps", icon: "🌐" },
  { id: "mobile", label: "Mobile Apps", icon: "📱" }
];
