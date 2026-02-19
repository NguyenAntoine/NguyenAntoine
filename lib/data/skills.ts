import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    id: "management",
    title: "Gestion de Projet & Architecture",
    description: "Je résous les problèmes de bout en bout. De la compréhension des besoins à la livraison en production. À l'aise avec les équipes agiles et les défis techniques complexes. Architecture logicielle, DDD/TDD et approches traditionnelles.",
    icon: "BookOpen",
  },
  {
    id: "web",
    title: "Développement Web Full-stack",
    description: "Je crée des applications web rapides et fiables. Travail full-stack avec PHP/Laravel, Vue.js, Angular et Java/Spring Boot. De la conception architecturale au déploiement en production. Bases de données: MySQL, PostgreSQL, MongoDB. APIs REST et microservices.",
    icon: "Code",
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    description: "J'aide les équipes à livrer vite et fiablement. Pipelines CI/CD avancés (Jenkins, GitHub Actions), containerisation avec Docker, infrastructure cloud. Terraform, Ansible, déploiement AppStore & Google Play. Simplifier la production.",
    icon: "Server",
  },
];
