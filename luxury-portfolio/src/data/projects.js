import mediBillImg from "../assets/MediBill.png";
import chatmeImg from "../assets/ChatMe.png";
import claImg from "../assets/CLA.png";
import edulogImg from "../assets/EduLog.png";

export const projects = [
  {
    id: 1,
    category: "MediBill",
    title: "MediBill - Healthcare Billing System",
    description:
      "A comprehensive hospital billing system that streamlines patient billing and automated invoice generation through a secure, role-based platform with a modern, responsive interface for efficient healthcare operations.",
    tags: [
      "React",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JWT Authentication",
      "Express.js",
      "MySQL",
      "Git & GitHub",
      "Postman",
      "REST APIs",
    ],
    image: mediBillImg,
    link: "https://github.com/LPK98/Hospital-bill-system",
  },
  {
    id: 2,
    category: "ChatMe",
    title: "ChatMe - Real-time Messaging App",
    description:
      "A real-time chat application that enables instant messaging through a secure, role-based platform with a modern, responsive interface for seamless communication.",
    tags: ["React Native", "Firebase", "WebSockets", "Tailwind CSS"],
    image: chatmeImg,
    link: "https://github.com/LPK98/ChatMe",
  },
  {
    id: 3,
    category: "Crime Link Analyzer",
    title: "Crime Link Analyzer - Criminal Network Visualization",
    description:
      "A cross-platform web and mobile application using machine learning to visualize criminal activity networks and provide actionable insights for effective investigation and crime prevention.",
    tags: ["React Native", "React", "Springboot", "API's"],
    image: claImg,
    link: "https://github.com/LPK98/CrimelinkAnalyzer_App",
  },
  {
    id: 4,
    category: "EduLOG",
    title: "EduLOG - Educational Learning Management System",
    description:
      "A comprehensive learning management system that streamlines educational administration, enhances student engagement, and provides a modern, responsive interface for efficient online learning.",
    tags: ["C#", "Figma"],
    image: edulogImg,
    link: "https://github.com/LPK98/library_Management",
  },
];
