import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    id: 'management',
    title: 'Gestion de projet',
    description: 'De la conception d\'une solution applicative à l\'analyse des besoins, je peux construire un projet que ce soit avec un suivi itératif avec les méthodes Agiles ou que ce soit avec des spécifications dans un cahier des charges.',
    icon: 'BookOpen',
  },
  {
    id: 'web',
    title: 'Web',
    description: 'En constante apprentissage, je suis passionné par le dev web. Je me concentre sur des frameworks Backend (PHP/Symfony et Java/Kotlin/Spring Boot), mais aussi sur des frameworks JavaScript comme Angular et Vue.js.',
    icon: 'Code',
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'En fluidifiant les développements et les tests, je sais mettre en place de l\'intégration continue sur des applications, avec Jenkins, avec un environnement similaire en production en utilisant les conteneurs Docker.',
    icon: 'Server',
  },
];
