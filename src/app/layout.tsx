import type { Metadata } from 'next';
import '../styles/globals.css';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Bem Me Quer Feliz',
  description: 'Site institucional da ONG Bem Me Quer Feliz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased" style={{ fontFamily: 'var(--font-sans)' }}>
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
