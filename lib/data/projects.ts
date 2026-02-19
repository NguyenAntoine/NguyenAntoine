import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: "playplay",
    title: "Playplay",
    subtitle: "Plateforme SaaS de création vidéo - Stack: Laravel, Vue.js, architecture microservices",
    image: "/images/projects/playplay.png",
    url: "https://playplay.com/",
    isPrivate: true,
  },
  {
    id: "prevyo",
    title: "Prevyo Semantic Services",
    subtitle: "Plateforme d'analyse textuelle avec IA - API RESTful, intégration NLP avancée",
    image: "/images/projects/pss.png",
    url: "https://pss.prevyo.com/",
    isPrivate: true,
  },
  {
    id: "dalyo",
    title: "Dalyo DATI",
    subtitle: "Système de gestion d'alertes et sécurité pour travailleurs isolés - App temps réel",
    image: "/images/projects/dati.png",
    url: "https://dati.dalyo.com/",
    isPrivate: true,
  },
];
