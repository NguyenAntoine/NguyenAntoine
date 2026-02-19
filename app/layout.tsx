import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Antoine Nguyen - Senior Developer Full-stack | Portfolio & Projets SaaS",
  description: "Senior Developer Full-stack avec depuis 2017 d'expérience. Expert PHP/Laravel, Java/Spring Boot, Vue.js, Angular. Spécialiste architecture logicielle, DevOps, SaaS. Projets en production avec millions d'utilisateurs.",
  keywords: "développeur fullstack, senior developer, laravel, vue.js, spring boot, angular, devops, docker, jenkins, github actions, sonarqube, architecture logicielle, SaaS, microservices, DDD, TDD, php, java",
  authors: [{ name: "Antoine Nguyen" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nguyenantoine.com",
    siteName: "Antoine Nguyen - Senior Developer Full-stack",
    title: "Antoine Nguyen - Senior Developer Full-stack | depuis 2017 en PHP, Laravel, Vue.js",
    description: "Portfolio de Antoine Nguyen. Senior Developer Full-stack expert en architecture logicielle, DevOps et SaaS. Spécialiste Laravel, Vue.js, Spring Boot. Projets en production.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
