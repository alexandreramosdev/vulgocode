/**
 * Configuração central do site.
 *
 * Tudo que depende do proprietário fica aqui — nenhum componente contém
 * dados pessoais ou links hardcoded. Campos `null` fazem a interface
 * correspondente desaparecer (nenhum link morto).
 */

export interface SiteConfig {
  name: string;
  url: string;
  tagline: string;
  contact: {
    email: string | null;
    github: string | null;
    linkedin: string | null;
  };
  owner: {
    name: string | null;
    bio: string | null;
  };
}

export const site: SiteConfig = {
  name: 'VulgoCode',
  url: 'https://vulgocode.com.br',
  tagline: 'Desenvolvimento de software e soluções digitais.',
  contact: {
    email: 'alexandresantos84@gmail.com',
    github: 'https://github.com/alexandreramosdev',
    linkedin: 'https://www.linkedin.com/in/alexandreramosdev',
  },
  owner: {
    // Apresentação pessoal baseada no perfil público do GitHub — revise o
    // texto abaixo livremente; o bloco aparece na seção Sobre.
    name: 'Alexandre Ramos',
    bio: 'Estudante de Engenharia de Software e desenvolvedor por trás da VulgoCode. Construo projetos reais na prática — de aplicações mobile-first a ferramentas para pequenos negócios — com foco em resolver problemas concretos.',
  },
};

export const hasContact = Boolean(
  site.contact.email ?? site.contact.github ?? site.contact.linkedin,
);

export const navItems = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  ...(hasContact ? [{ label: 'Contato', href: '#contato' }] : []),
];
