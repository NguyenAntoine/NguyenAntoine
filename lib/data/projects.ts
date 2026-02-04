import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'playplay',
    title: 'Playplay',
    subtitle: 'Plateforme web pour la création de vidéo simple et rapide',
    image: '/images/projects/playplay.png',
    url: 'https://playplay.com/',
    isPrivate: true,
  },
  {
    id: 'prevyo',
    title: 'Prevyo Semantic Services',
    subtitle: 'Application web de démonstration de services pour l\'analyse de texte',
    image: '/images/projects/pss.png',
    url: 'https://pss.prevyo.com/',
    isPrivate: true,
  },
  {
    id: 'dalyo',
    title: 'Dalyo DATI',
    subtitle: 'Application web pour la gestion d\'alertes pour les travailleurs isolés',
    image: '/images/projects/dati.png',
    url: 'https://dati.dalyo.com/',
    isPrivate: true,
  },
];
