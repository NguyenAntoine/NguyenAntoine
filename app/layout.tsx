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
  title: 'Antoine Nguyen - Développeur Web',
  description: 'Portfolio professionnel d\'Antoine Nguyen. Développeur Fullstack passionné par le web et l\'innovation.',
  keywords: 'développeur web, fullstack, laravel, vue.js, symfony, java, spring boot',
  authors: [{ name: 'Antoine Nguyen' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://nguyenantoine.com',
    siteName: 'Antoine Nguyen Portfolio',
    title: 'Antoine Nguyen - Développeur Web',
    description: 'Portfolio professionnel d\'Antoine Nguyen. Développeur Fullstack passionné par le web et l\'innovation.',
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
