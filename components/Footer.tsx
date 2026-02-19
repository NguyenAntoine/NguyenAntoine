import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '@/lib/data/contact';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Antoine Nguyen</h3>
            <p className="text-gray-600 mb-4">
              Développeur Full-stack créant des applications web performantes. depuis 2017 d'expérience dans des startups et scale-ups. Passionné par l'apprentissage et l'innovation.
            </p>
            <p className="text-gray-600 text-sm">
              Ouvert aux projets freelance et nouvelles opportunités. Créons quelque chose de bien ensemble.
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              <span>{contactInfo.location}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Antoine Nguyen. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
