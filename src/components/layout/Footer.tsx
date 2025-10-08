'use client';

import Image from 'next/image';

export function Footer() {
  const sections = [
    {
      title: 'QUEM SOMOS',
      links: [
        { label: 'Nossa História', href: '/sobre/historia' },
        { label: 'Missão & Visão', href: '/sobre/missao' },
        { label: 'Equipe', href: '/sobre/equipe' },
      ],
    },
    {
      title: 'APOIE',
      links: [
        { label: 'Faça uma Doação', href: '/apoie/doacao' },
        { label: 'Seja Voluntário', href: '/apoie/voluntario' },
        { label: 'Parcerias', href: '/apoie/parcerias' },
        { label: 'Campanhas Atuais', href: '/apoie/campanhas' },
      ],
    },
    {
      title: 'RECURSOS',
      links: [
        { label: 'Notícias & Eventos', href: '/recursos/noticias' },
        { label: 'Projetos', href: '/recursos/projetos' },
        { label: 'Relatórios', href: '/recursos/relatorios' },
      ],
    },
    {
      title: 'CONECTE-SE',
      links: [
        { label: 'Fale Conosco', href: '/contato' },
        { label: 'Central de Ajuda', href: '/ajuda' },
        { label: 'Redes Sociais', href: '/redes-sociais' },
      ],
    },
  ];

  const socialIcons = [
    { name: 'facebook', href: 'https://facebook.com' },
    { name: 'twitter', href: 'https://twitter.com' },
    { name: 'linkedin', href: 'https://linkedin.com' },
    { name: 'behance', href: 'https://behance.com' },
  ];

  return (
    <footer className="relative bg-[#0f1729] text-white overflow-hidden">
      {/* Background Image com Overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/assets/images/ui/footer-background.svg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1729]/95 to-[#0f1729]" />

      {/* Content */}
      <div className="relative section-container py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/images/logos/logo-icon.svg"
                alt="Bem Me Quer"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">bem me quer</span>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Há 14 anos promovendo cultura, esporte e assistência social.
              Oferecemos aulas de música, dança e artes marciais, além de
              projetos comunitários que transformam vidas e fortalecem nossa
              comunidade.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {socialIcons.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-all duration-300 outline-none"
                  aria-label={social.name}
                >
                  <Image
                    src={`/assets/icons/svg/${social.name}.svg`}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {sections.map(section => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider text-white/50">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-300 inline-block outline-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-white/60 text-center">
            Copyright © 2010 Bem Me Quer Social. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
