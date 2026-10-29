/**
 * Serviços apresentados na página inicial.
 *
 * Para publicar ou retirar um serviço da oferta, altere `enabled`.
 * A seção lista apenas os serviços habilitados.
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export const services: Service[] = [
  {
    id: 'sites',
    title: 'Sites institucionais e landing pages',
    description:
      'Páginas rápidas, responsivas e bem posicionadas em buscas, com foco em apresentar o negócio e gerar contato.',
    enabled: true,
  },
  {
    id: 'aplicacoes-web',
    title: 'Aplicações web',
    description:
      'Interfaces e funcionalidades sob medida para a web, da ideia à publicação — com escopo definido em conjunto.',
    enabled: true,
  },
  {
    id: 'sistemas-internos',
    title: 'Sistemas internos e ferramentas de gestão',
    description:
      'Soluções para organizar informações e processos do dia a dia, substituindo planilhas e controles manuais.',
    enabled: true,
  },
  {
    id: 'integracoes',
    title: 'Integrações e automações',
    description:
      'Conexão entre sistemas e automatização de tarefas repetitivas para economizar tempo e reduzir erros.',
    enabled: true,
  },
];

export const enabledServices = services.filter((service) => service.enabled);
