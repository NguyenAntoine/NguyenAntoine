import { Job } from '@/types';

export const jobs: Job[] = [
  {
    id: "playplay",
    company: "Playplay",
    position: "Senior Developer Full-stack",
    description: "J'ai apporté beaucoup de features à PlayPlay. Construit et maintenu des fonctionnalités complexes dans une plateforme SaaS en forte croissance. Travail sur l'architecture backend (PHP/Laravel), frontend (Vue.js) et infrastructure (Docker, CI/CD). Participation au développement de PlayPlay Design (solution GenAI). Travail en full-remote avec équipe internationale.",
    duration: "Depuis 2021",
    startDate: "2021",
    logo: "/images/companies/playplay.jpg",
    isCurrent: true,
    technologies: ["PHP", "Laravel", "Vue.js", "JavaScript", "MySQL", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
  },
  {
    id: "emvista",
    company: "Emvista",
    position: "Développeur Full-stack",
    description: "Conception et développement d'applications complexes avec Spring Boot et Angular. Création d'une application mobile Ionic 3 déployée sur AppStore et Google Play. Travail sur architecture microservices, APIs RESTful et infrastructure scalable pour entreprises.",
    duration: "1 an",
    startDate: "2020",
    endDate: "2021",
    logo: "/images/companies/emvista.jpg",
    technologies: ["Java", "Spring Boot", "Angular", "Ionic", "TypeScript", "PostgreSQL"],
  },
  {
    id: "penbase",
    company: "Penbase",
    position: "Développeur Web Backend",
    description: "Développement et maintenance d'applications web d'entreprise avec Symfony. Optimisation des performances, gestion de bases de données MySQL, intégration d'APIs externes. Formation pratique en bonnes pratiques de développement, testing et méthodologies agiles.",
    duration: "2 ans d'alternance",
    startDate: "2017",
    endDate: "2019",
    logo: "/images/companies/penbase.png",
    technologies: ["PHP", "Symfony", "JavaScript", "HTML", "CSS", "MySQL", "REST APIs"],
  },
];
