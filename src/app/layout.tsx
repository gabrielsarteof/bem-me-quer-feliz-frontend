import type { Metadata } from 'next';
import '../styles/globals.css';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Bem Me Quer Feliz',
  description: 'Site institucional da ONG Bem Me Quer Feliz',
  keywords: 'ONG, bem-estar, felicidade, projetos sociais, voluntariado',
  authors: [{ name: 'Bem Me Quer Feliz' }],
  creator: 'Bem Me Quer Feliz',
  publisher: 'Bem Me Quer Feliz',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth">
      <body
        className="antialiased min-h-screen h-full flex flex-col bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 focus:outline-none"
        style={{ fontFamily: 'var(--font-sans)' }}
        suppressHydrationWarning
      >
        <Header
          logo="/assets/images/logos/logo.svg"
          menuItems={[
            { label: 'Início', href: '/' },
            { label: 'Sobre Nós', href: '/sobre' },
            { label: 'Projetos', href: '/projetos' },
            { label: 'Cursos', href: '/cursos' },
            { label: 'Contato', href: '/contato' },
          ]}
          primaryCTA={{ label: 'Como ajudar?', href: '/doar' }}
          showAnnouncement
        />
        <main className="flex-1 w-full max-w-none overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
