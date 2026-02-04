import { Testimonial } from '@/types';

// User will provide LinkedIn recommendations to populate this file
export const testimonials: Testimonial[] = [
  {
    id: 'jean-bort',
    quote: 'Antoine est en alternance chez Penbase. Il a intégré l\'équipe de développement Web. Il participe au développement d\'un outil interne basé sur le framework Symfony. Ses connaissances en Php/Html/JS lui permette d\'intervenir sur d\'autres projets Web. Antoine est un développeur très motivé et s\'est très facilement intégré au sein de l\'équipe.',
    personName: 'Jean Bort',
    personRole: 'Chef de projet/Tuteur pour alternance et stage dans Penbase',
    personLinkedIn: 'https://www.linkedin.com/in/jeanbort/',
    companyName: 'Penbase',
    companyLogo: '/images/companies/penbase.png',
  },
  {
    id: 'nicolas-gagean',
    quote: 'Antoine travaille chez Penbase en alternance, comme développeur Web. Il a participé à l\'élaboration du produit Dalyo DATI, une application mobile de PTI/DATI, en développant l\'interface web permettant de gérer la solution. Ses qualités lui ont permis de s\'intégrer rapidement à l\'équipe : motivé, à l\'écoute, autonome, compétent. Antoine est en capacité de conduire un projet innovant et de mettre en oeuvre de nouvelles fonctionnalités à partir de spécifications fonctionnelles.',
    personName: 'Nicolas Gagean',
    personRole: 'Directeur commercial dans Penbase',
    personLinkedIn: 'https://www.linkedin.com/in/nicolas-gagean-8184a7a2/',
    companyName: 'Penbase',
    companyLogo: '/images/companies/penbase.png',
  },
  {
    id: 'thibaud-sanchez',
    quote: 'Antoine est quelqu\'un de passionné, il aime ce qu\'il fait et est très consciencieux. Il adore découvrir de nouvelles technos ou de nouveaux langages. Ses facultés d\'adaptation font qu\'il est très vite opérationnel même dans des environnements nouveaux. A côté de ça, il est très sympathique et ouvert d\'esprit Il s\'est très vite intégré à l\'équipe c\'était un réel plaisir de travailler à ses côtés et j\'espère qu\'on aura l\'opportunité de travailler ensemble à nouveau dans le futur.',
    personName: 'Thibaud Sanchez',
    personRole: 'Software Engineer dans Emvista',
    personLinkedIn: 'https://www.linkedin.com/in/thibaudsanchez/',
    companyName: 'Emvista',
    companyLogo: '/images/companies/emvista.jpg',
  },
];
