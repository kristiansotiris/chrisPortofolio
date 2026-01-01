const projects = [
  {
    id: 1,
    src: "/assets/vertical_time_line_projects/fast_food.gif",
    alt: "EaToGo Food Delivery Platform",
    title: "EaToGo - Food Delivery Platform",
    description:
      "A comprehensive food delivery application featuring real-time order tracking, restaurant management, and seamless payment integration. Built with modern web technologies for optimal performance.",
    tech: ["React", "Node.js", "MySQL", "Socket.io"],
    year: "2024",
    category: "Full-Stack",
    featured: true,
    githubUrl: "https://github.com/kristiansotiris",
  },
  {
    id: 2,
    src: "/assets/vertical_time_line_projects/housing.gif",
    alt: "SweetHome Real Estate Platform",
    title: "SweetHome - Real Estate Web App",
    description:
      "Modern real estate platform built with React Vite, featuring property listings, advanced search filters, interactive maps, and user-friendly property management dashboard.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "API Integration",
      "MongoDB",
      "Express",
      "Node.js",
      "JWT",
      "Mongoose",
    ],
    year: "2024",
    category: "Full-Stack",
    featured: true,
    githubUrl: "https://github.com/kristiansotiris",
  },

  // C# & .NET Projects
  {
    id: 3,
    src: "/assets/vertical_time_line_projects/security.gif",
    alt: "Smart House Automation",
    title: "Smart House - Home Automation System",
    description:
      "Event-driven C# application demonstrating publisher-subscriber pattern for home automation. Features motion detection with intensity-based event triggering and coordinated device responses.",
    tech: ["C#", ".NET", "Event-Driven Architecture", "Design Patterns"],
    year: "2024",
    category: "Desktop Application",
    githubUrl: "https://github.com/kristiansotiris/Smart-House",
  },
  {
    id: 4,
    src: "/assets/vertical_time_line_projects/card.gif",
    alt: "Advanced Bank Accounting System",
    title: "Advanced Bank Accounting",
    description:
      "Sophisticated banking application demonstrating C# events and delegates. Features transaction management, event publishing for deposits/withdrawals, and real-time balance tracking.",
    tech: ["C#", ".NET", "Events & Delegates", "OOP"],
    year: "2024",
    category: "Desktop Application",
    githubUrl: "https://github.com/kristiansotiris/Advanced-BankAccounting",
  },
  {
    id: 5,
    src: "/assets/vertical_time_line_projects/currency.gif",
    alt: "Currency Converter with Live API",
    title: "Currency Converter - Live Exchange Rates",
    description:
      "Real-time currency conversion application using live API integration. Features multiple currency support, historical rate tracking, and clean WPF interface with data binding.",
    tech: ["C#", "WPF", "REST API", "Data Binding"],
    year: "2024",
    category: "Desktop Application",
    githubUrl: "https://github.com/kristiansotiris/ConverterWithApi",
  },
  {
    id: 6,
    src: "/assets/vertical_time_line_projects/car.gif",
    alt: "Vehicle Types Management",
    title: "Vehicle Types - OOP Demonstration",
    description:
      "Comprehensive vehicle management system showcasing inheritance, interfaces, and polymorphism. Includes Hybrid, Electric, and Gasoline vehicle types with unique functionalities.",
    tech: ["C#", "OOP", "Interfaces", "Inheritance"],
    year: "2024",
    category: "Desktop Application",
    githubUrl: "https://github.com/kristiansotiris/Vehicle-Types-Creation",
  },

  // Unity & Game Development
  {
    id: 7,
    src: "/assets/vertical_time_line_projects/laptop-wpf.gif",
    alt: "Unity Player Controller",
    title: "Unity Player Controller",
    description:
      "Custom Unity player controller script with enhanced collision detection, sound effects integration, and smooth movement mechanics. Perfect base for game development projects.",
    tech: ["C#", "Unity", "Game Development", "Audio System"],
    year: "2024",
    category: "Game Development",
    githubUrl: "https://github.com/kristiansotiris/PlayerController",
  },

  // Kotlin & Android
  {
    id: 8,
    src: "/assets/vertical_time_line_projects/phone.gif",
    alt: "Location Tracking App",
    title: "Location App - GPS Tracking",
    description:
      "Android location tracking application using Kotlin with MVVM architecture. Features real-time GPS tracking, location state management with ViewModel, and clean architecture principles.",
    tech: ["Kotlin", "Android", "MVVM", "GPS/Location Services"],
    year: "2024",
    category: "Mobile Development",
    githubUrl: "https://github.com/kristiansotiris/LocationApp-In-Kotlin",
  },

  // Backend & API Projects
  {
    id: 9,
    src: "/assets/vertical_time_line_projects/security.gif",
    alt: "NestJS S3 AWS Integration",
    title: "NestJS AWS S3 File Upload",
    description:
      "Production-ready NestJS module for AWS S3 file management. Implements secure file upload, deletion, and management with AWS SDK v3 integration and TypeScript best practices.",
    tech: ["NestJS", "TypeScript", "AWS S3", "Node.js"],
    year: "2024",
    category: "Backend",
    githubUrl: "https://github.com/kristiansotiris/NestJs-S3-V4-Bucket-AWS-",
  },

  // Educational & Learning Projects
  {
    id: 10,
    src: "/assets/vertical_time_line_projects/laptop_wpf.gif",
    alt: "LINQ Usage Examples",
    title: "LINQ - Query Operations",
    description:
      "Comprehensive guide and examples for LINQ usage in C#. Demonstrates various query operations, filtering, sorting, and data manipulation techniques with real-world scenarios.",
    tech: ["C#", "LINQ", ".NET", "Data Structures"],
    year: "2024",
    category: "Educational",
    githubUrl: "https://github.com/kristiansotiris/Linq-Usege",
  },
  {
    id: 11,
    src: "/assets/vertical_time_line_projects/laptop_wpf.gif",
    alt: "Quiz Application OOP",
    title: "Quiz App - OOP Design",
    description:
      "Object-oriented quiz application with separate Question and Quiz classes. Demonstrates encapsulation, class design, and interactive console-based quiz management.",
    tech: ["C#", "OOP", "Console Application", "Design Patterns"],
    year: "2024",
    category: "Educational",
    githubUrl: "https://github.com/kristiansotiris/QuizApp",
  },
  {
    id: 12,
    src: "/assets/vertical_time_line_projects/car.gif",
    alt: "Car Test Drive System",
    title: "Car Test Drive - Customer Management",
    description:
      "OOP-based system for managing customer test drives with VIP customer handling. Features luxury car classification and subscription-based access control.",
    tech: ["C#", "OOP", "Business Logic", "Access Control"],
    year: "2024",
    category: "Educational",
    githubUrl: "https://github.com/kristiansotiris/CarTestDrive",
  },
  {
    id: 13,
    src: "/assets/vertical_time_line_projects/laptop_wpf.gif",
    alt: "Weather Simulator",
    title: "Weather Simulator - Loop Logic",
    description:
      "Basic weather simulation demonstrating loops, functions, and array manipulation. Educational project showcasing fundamental programming concepts and data structures.",
    tech: ["C#", "Arrays", "Functions", "Loops"],
    year: "2024",
    category: "Educational",
    githubUrl: "https://github.com/kristiansotiris/WeatherSimulator",
  },
  {
    id: 14,
    src: "/assets/vertical_time_line_projects/laptop_wpf.gif",
    alt: "Student Management System",
    title: "Student Management System",
    description:
      "Comprehensive student management application with grade calculations, reporting features, and data management. Implements arrays, loops (foreach/for), and functions for academic tracking.",
    tech: ["C#", "Arrays", "Data Management", "Algorithms"],
    year: "2024",
    category: "Educational",
    githubUrl: "https://github.com/kristiansotiris/STUDENTS-MANAGEMENT-SYSTEM",
  },

  // Utility Projects
  {
    id: 15,
    src: "/assets/vertical_time_line_projects/laptop_wpf.gif",
    alt: "Excel File Generator",
    title: "Excel File Generator - Node.js",
    description:
      "Terminal-based Node.js script for generating Excel files from user input. Dynamically collects names and ages, then exports structured data to Excel format.",
    tech: ["Node.js", "JavaScript", "Excel.js", "Terminal"],
    year: "2024",
    category: "Utility",
    githubUrl:
      "https://github.com/kristiansotiris/Excel-File-Creation-in-JavaScript",
  },
];

export default projects;
