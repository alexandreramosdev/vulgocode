/**
 * Projetos exibidos na página inicial — todos reais, com repositórios
 * públicos no GitHub e links verificados.
 *
 * Para adicionar um projeto, inclua um objeto no array abaixo — nenhum
 * componente precisa ser alterado.
 *
 * Estados possíveis (`status`):
 * - `publicado`: tem versão publicada acessível (link de demonstração).
 * - `em-desenvolvimento`: o repositório indica trabalho em andamento.
 * - `aberto`: código público no GitHub, sem versão publicada.
 */

export type ProjectStatus = 'publicado' | 'em-desenvolvimento' | 'aberto';

export interface Project {
  name: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  /** Somente preencher quando o link existir de verdade. */
  demoUrl?: string;
  /** Somente preencher quando o link existir de verdade. */
  repoUrl?: string;
}

export const statusLabels: Record<ProjectStatus, string> = {
  publicado: 'Publicado',
  'em-desenvolvimento': 'Em desenvolvimento',
  aberto: 'Código aberto',
};

export const projects: Project[] = [
  {
    name: 'Contas de Governo',
    description:
      'Site de visualização de informações públicas de contas governamentais, entregue como trabalho freelance — um dos primeiros projetos profissionais. Continua funcional e publicado.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Sass'],
    status: 'publicado',
    demoUrl: 'https://alexandreramos-contasgoverno.netlify.app/',
    repoUrl: 'https://github.com/alexandreramosdev/front-end.contas-governo',
  },
  {
    name: 'Pocket Store MVP',
    description:
      'Catálogo mobile-first para microestoque: vitrine pública com busca, área do lojista para cadastrar produtos e finalização do interesse pelo WhatsApp com mensagem pré-formatada.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    status: 'aberto',
    repoUrl: 'https://github.com/alexandreramosdev/pocket-store-mvp',
  },
  {
    name: 'Cardápio Zero',
    description:
      'SaaS de cardápio digital para restaurantes: painel para gerenciar produtos e categorias, e página exclusiva do estabelecimento para receber pedidos.',
    tech: ['Next.js', 'Prisma', 'Tailwind CSS'],
    status: 'aberto',
    repoUrl: 'https://github.com/alexandreramosdev/cardapio_zero',
  },
  {
    name: 'Conta Antes',
    description:
      'Aplicativo web mobile-first para planejar compras de supermercado e acompanhar o total em tempo real, com histórico de preços salvos no próprio navegador. MVP finalizado e publicado.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'publicado',
    demoUrl: 'https://contas-antes.vercel.app/',
    repoUrl: 'https://github.com/alexandreramosdev/contas-antes',
  },
  {
    name: 'Tema VulgoCode para VS Code',
    description:
      'Tema escuro para Visual Studio Code publicado no Marketplace sob o nome VulgoCode — a marca aplicada a uma ferramenta de uso diário de quem escreve código.',
    tech: ['VS Code'],
    status: 'publicado',
    demoUrl:
      'https://marketplace.visualstudio.com/items?itemName=alexandreramos.vulgocode-color-theme',
    repoUrl: 'https://github.com/alexandreramosdev/vulgocode-theme-vscode',
  },
];
