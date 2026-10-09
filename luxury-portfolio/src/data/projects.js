import mediBillImg from "../assets/MediBill.png";
import mediBillVideo from "../Assets/MediBill.mp4";
import chatmeImg from "../assets/ChatMe.png";
import chatmeVideo from "../Assets/ChatMe.mp4";
import claImg from "../assets/CLA.png";
import edulogImg from "../assets/EduLog.png";
import edulogAttendanceImg from "../Assets/EduLog1.png";
import edulogAddGradesImg from "../Assets/EduLog2.png";
import edulogGradeReportsImg from "../Assets/EduLog3.png";
import edulogStudentReportImg from "../Assets/EduLog4.png";
import edulogAnalyticsImg from "../Assets/EduLog5.png";
import petCareImg from "../Assets/PetCare.webp";
import petCareUserImg from "../Assets/Petcare/User.webp";
import petCareDoctorImg from "../Assets/Petcare/Doctor.webp";
import petCareHospitalImg from "../Assets/Petcare/Hospital.webp";
import petCareAdminImg from "../Assets/Petcare/admin.webp";
import petCareDesktopVideo from "../Assets/Petcare/DesktopApp.mp4";
import petCareMobileVideo from "../Assets/Petcare/MobileApp.mp4";

// image, link and gallery are optional: without an image the card shows `icon` instead,
// without a link the "View Project" button is hidden, and with a gallery the card
// image (and a "View Screens" button) opens those items in a lightbox.
// Gallery items are images unless they have `type: "video"`.
export const projects = [
  {
    id: 1,
    category: "PetCare",
    title: "PetCare - Full-Stack Pet Care Platform",
    description:
      "A full-stack pet care platform with a Flutter mobile app and a React web/desktop app, backed by Azure Functions, Azure SQL, and Azure Blob Storage. Users can sign in, manage their profile and pets, keep health records, and book grooming and appointments with reminders.",
    tags: [
      "Flutter",
      "React",
      "Azure Functions",
      "Azure SQL",
      "Azure Blob Storage",
      "REST APIs",
      "Authentication",
    ],
    image: petCareImg,
    gallery: [
      {
        src: petCareDesktopVideo,
        label: "Desktop app walkthrough",
        type: "video",
      },
      {
        src: petCareMobileVideo,
        label: "Mobile app walkthrough",
        type: "video",
      },
      { src: petCareUserImg, label: "Pet owner login" },
      { src: petCareDoctorImg, label: "Doctor login" },
      { src: petCareHospitalImg, label: "Hospital login" },
      { src: petCareAdminImg, label: "Admin portal" },
    ],
  },
  {
    id: 2,
    category: "CrimeLink Analyzer",
    title: "CrimeLink Analyzer - Crime Investigation Intelligence",
    description:
      "An AI-powered crime investigation intelligence system developed for the Matara Crime Division, Sri Lanka Police. It brings together facial recognition, call record analysis, number plate lookup, and safety zone visualization, with a mobile app for field officers.",
    tags: [
      "React",
      "React Native",
      "Spring Boot",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Firestore",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
    image: claImg,
    link: "https://github.com/LPK98/CrimelinkAnalyzer_App",
  },
  {
    id: 3,
    category: "MediBill",
    title: "MediBill - Hospital Billing Management System",
    description:
      "A hospital billing management system that streamlines patient billing and automated invoice generation through a secure, role-based platform, with a React frontend and a Node.js/Express API on MySQL secured by JWT authentication.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MySQL",
      "JWT Authentication",
    ],
    image: mediBillImg,
    gallery: [{ src: mediBillVideo, label: "App walkthrough", type: "video" }],
    link: "https://github.com/LPK98/Hospital-bill-system",
  },
  {
    id: 4,
    category: "ChatMe",
    title: "ChatMe - Real-time Mobile Chat App",
    description:
      "A real-time mobile chat application built with React Native, using Firebase Authentication for sign-in, Firestore for real-time messaging, and Firebase Storage.",
    tags: [
      "React Native",
      "Firebase Authentication",
      "Firestore",
      "Firebase Storage",
    ],
    image: chatmeImg,
    gallery: [{ src: chatmeVideo, label: "App walkthrough", type: "video" }],
    link: "https://github.com/LPK98/ChatMe",
  },
  {
    id: 5,
    category: "EduLOG",
    title: "EduLOG - Educational Learning Management System",
    description:
      "A comprehensive learning management system that streamlines educational administration, enhances student engagement, and provides a modern, responsive interface for efficient online learning.",
    tags: ["C#", "Figma"],
    image: edulogImg,
    gallery: [
      { src: edulogAttendanceImg, label: "Mark attendance" },
      { src: edulogAddGradesImg, label: "Add grades" },
      { src: edulogGradeReportsImg, label: "Grade reports" },
      { src: edulogStudentReportImg, label: "Student report (PDF)" },
      { src: edulogAnalyticsImg, label: "Analytics & charts" },
    ],
    link: "https://github.com/LPK98/library_Management",
  },
];
