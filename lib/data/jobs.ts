import { Job } from '@/types';

export const jobs: Job[] = [
  {
    id: 'playplay',
    company: 'Playplay',
    position: 'Développeur Fullstack',
    description: 'Développement avec le framework PHP **Laravel** côté back et le framework Javascript **VueJS** côté front. En Full-remote.',
    duration: 'Depuis 2021',
    startDate: '2021',
    logo: '/images/companies/playplay.jpg',
    isCurrent: true,
    technologies: ['PHP', 'Laravel', 'Vue.js', 'JavaScript', 'MySQL'],
  },
  {
    id: 'emvista',
    company: 'Emvista',
    position: 'Développeur Fullstack',
    description: 'Réalisation de plusieurs applications avec le framework Java **Spring Boot** côté back et le framework Javascript **Angular** côté front. Développement d\'une application **Ionic 3** et déploiement sur AppStore et GoogleStore.',
    duration: '1 an',
    startDate: '2020',
    endDate: '2021',
    logo: '/images/companies/emvista.jpg',
    technologies: ['Java', 'Spring Boot', 'Angular', 'Ionic', 'TypeScript'],
  },
  {
    id: 'penbase',
    company: 'Penbase',
    position: 'Développeur web - Symfony 3/4',
    description: 'Développement, déploiement et maintenance d\'une application web avec le framework PHP **Symfony**.',
    duration: '2 ans d\'alternance',
    startDate: '2017',
    endDate: '2019',
    logo: '/images/companies/penbase.png',
    technologies: ['PHP', 'Symfony', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
  },
];
