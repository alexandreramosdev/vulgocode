# TASKS.md — VulgoCode

Status: `[ ]` pendente · `[~]` em andamento · `[x]` concluído

## Fundação

- [x] T01 — `git init` (branch `main`) + `.gitignore` + scaffold Astro 5 TS strict + `npm install`
- [x] T02 — `src/config/site.ts` (marca, domínio, contato e responsável condicionais)
- [x] T03 — `src/styles/tokens.css` + `global.css` (tema escuro, roxo de destaque, tipografia, foco visível)

## Estrutura e layout

- [x] T04 — `BaseLayout.astro` (SEO, metadados, skip-link, favicon)
- [x] T05 — `Header.astro` com navegação e menu mobile acessível (JS mínimo, `aria-expanded`, fechar com Esc)
- [x] T06 — `Footer.astro` com ano dinâmico e links internos condicionais

## Seções

- [x] T07 — `Hero.astro` com título, texto de apoio e CTAs funcionais (CTA de contato troca para "Ver serviços" enquanto não há canais configurados)
- [x] T08 — Projetos: `data/projects.ts` + `ProjectsSection` + `ProjectCard` (exemplos rotulados, aviso de transparência, links só quando existirem)
- [x] T09 — Serviços: `data/services.ts` com flag `enabled` + `ServicesSection` + `ServiceCard`
- [x] T10 — `About.astro` com proposta e espaço para bio real via `site.ts`
- [x] T11 — `Contact.astro` condicional + `mailto:` com assunto e corpo pré-preenchidos para orçamento
- [x] T12 — `index.astro` compondo todas as seções

## Qualidade e entrega

- [x] T13 — `favicon.svg`, `robots.txt` e metadados OG *(imagem OG PNG fica em P04)*
- [x] T14 — Acessibilidade: skip-link, teclado, foco visível, aria no menu, `prefers-reduced-motion`, contraste verificado — `astro check`: 0 erros/0 avisos. Teste com leitor de tela real ainda não executado.
- [x] T15 — Layout responsivo mobile-first e animações discretas (entrada do hero, hover de cards). Teste em dispositivos físicos ainda não executado.
- [x] T16 — `astro check` (0 erros) + `build` (1 página) + `preview` (HTTP 200) executados sem erros
- [x] T17 — README (execução, deploy GitHub Pages, DNS, manutenção, limitações)
- [x] T18 — `public/CNAME` + `.github/workflows/deploy.yml`

## Pendências do proprietário (não bloqueiam o desenvolvimento)

- [x] P01 — Contato completo: e-mail, GitHub (`alexandreramosdev`) e LinkedIn (`in/alexandreramosdev`) configurados em `src/config/site.ts`
- [x] P02 — Nome e bio preenchidos a partir do perfil público do GitHub — revisar e personalizar o texto em `src/config/site.ts`
- [x] P03 — Cinco projetos reais dos repositórios públicos em `src/data/projects.ts`, com links de demo verificados (HTTP 200) e status fiel a cada repositório (`shelfcheck` ficou de fora: contém apenas README, sem código)
- [ ] P04 — Imagem Open Graph 1200×630 PNG → referenciar em `src/layouts/BaseLayout.astro` (instrução em comentário)
- [~] P05 — Repositório `alexandreramosdev/vulgocode` criado, Pages ativo e primeiro deploy concluído (workflow `success`; edge do Pages responde HTTP 200 para `vulgocode.com.br`). Falta: trocar a zona DNS estacionada (`dns-parking.com`, IP `2.57.91.91`) pelos registros do GitHub Pages (instruções no README) e ativar Enforce HTTPS
- [ ] P06 — Páginas futuras `/projetos`, `/servicos`, `/sobre`, `/contato` (quando houver conteúdo suficiente)
- [ ] P07 — Página `/privacidade` (somente se houver coleta de dados)
- [ ] P08 — Testes manuais finais: leitor de tela, dispositivos físicos e Lighthouse após publicação
