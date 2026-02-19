import { Job } from '@/types';

export const jobs: Job[] = [
  {
    id: "playplay",
    company: "Playplay",
    position: "Senior Software Engineer",
    description: "Architect et implémentation de features produit en écoutant les users. Travail sur l'architecture backend (PHP/Laravel), frontend (Vue.js) et infrastructure (Docker, CI/CD). Leadership technique avec focus sur la qualité du code et l'expérience utilisateur. Participation au développement de PlayPlay Design (solution GenAI) avec approche product-first.",
    duration: "Depuis 2021",
    startDate: "2021",
    logo: "/images/companies/playplay.jpg",
    isCurrent: true,
    technologies: ["PHP", "Laravel", "Vue.js", "JavaScript", "MySQL", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
  },
  {
    id: "emvista",
    company: "Emvista",
    position: "Full-Stack Developer",
    description: "Conception et développement d'applications complexes avec Spring Boot et Angular, en collaboration avec l'équipe produit. Création d'une application mobile Ionic 3 (AppStore & Google Play) en pensant UX utilisateur. Architecture microservices et APIs RESTful avec focus sur la maintenabilité et la scalabilité.",
    duration: "1 an",
    startDate: "2020",
    endDate: "2021",
    logo: "/images/companies/emvista.jpg",
    technologies: ["Java", "Spring Boot", "Angular", "Ionic", "TypeScript", "PostgreSQL"],
  },
  {
    id: "penbase",
    company: "Penbase",
    position: "Web Developer Backend",
    description: "Développement et maintenance d'applications web d'entreprise avec Symfony, en comprenant les use cases métier. Optimisation des performances et architecture base de données pour supporter les besoins utilisateurs. Apprentissage des bonnes pratiques: testing, code quality, et méthodologies agiles.",
    duration: "2 ans d'alternance",
    startDate: "2017",
    endDate: "2019",
    logo: "/images/companies/penbase.png",
    technologies: ["PHP", "Symfony", "JavaScript", "HTML", "CSS", "MySQL", "REST APIs"],
  },
];
