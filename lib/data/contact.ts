import { ContactInfo, Counter } from '@/types';

export const contactInfo: ContactInfo = {
  email: 'antoine.ngu@outlook.fr',
  github: 'https://github.com/NguyenAntoine',
  linkedin: 'https://linkedin.com/in/nguyen-antoine',
  location: 'Montpellier, France',
};

export const counters: Counter[] = [
  {
    id: 'age',
    label: 'ans',
    value: 30,
    icon: 'User',
  },
  {
    id: 'experience',
    label: 'années d\'expérience professionnelle',
    value: 8,
    icon: 'Briefcase',
  },
  {
    id: 'graduation',
    label: 'Année d\'obtention du diplôme',
    value: 2019,
    icon: 'GraduationCap',
  },
  {
    id: 'countries',
    label: 'pays visités',
    value: 12,
    icon: 'Globe',
  },
];
