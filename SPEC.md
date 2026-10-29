# SPEC.md — Site institucional VulgoCode (v1)

Documento de referência da primeira versão. Mudanças de escopo devem ser refletidas aqui e em `TASKS.md`.

## 1. Objetivo

Construir uma presença digital profissional em `vulgocode.com.br` para:

- Apresentar a marca VulgoCode e seu responsável.
- Demonstrar projetos reais e experimentais.
- Construir credibilidade como desenvolvedor.
- Atrair futuros clientes, principalmente pequenos negócios.
- Apresentar serviços de desenvolvimento web e, futuramente, sistemas sob medida e automações.

Princípios: começar enxuto, custo zero de infraestrutura, arquitetura simples e evolutiva, sem refazer o site para crescer.

## 2. Público-alvo

- Pequenos negócios que precisam de site, sistema simples ou automação.
- Recrutadores e pares técnicos avaliando o trabalho do desenvolvedor.

## 3. Escopo da v1

Uma única landing page em `/`, com as seções: Header (navegação + menu mobile), Hero, Projetos em destaque, Serviços, Sobre, Contato (condicional) e Footer.

## 4. Requisitos funcionais

| ID | Requisito |
|---|---|
| RF-01 | Header com logotipo tipográfico VulgoCode, navegação para Projetos, Serviços, Sobre e Contato, e menu adaptado para dispositivos móveis, operável por teclado. |
| RF-02 | Hero com o título "Ideias transformadas em soluções digitais.", texto de apoio sobre desenvolvimento de aplicações web e ferramentas para problemas reais, e chamadas para projetos e contato. |
| RF-03 | Seção de projetos renderizada a partir de `src/data/projects.ts`: nome, descrição, tecnologias, situação; links de demo/repositório somente quando existirem. Adicionar projeto = adicionar objeto no array, sem editar componentes. |
| RF-04 | Seção de serviços renderizada a partir de `src/data/services.ts`, com flag `enabled` para ocultar serviços ainda não ofertáveis. |
| RF-05 | Seção Sobre com a proposta da marca e abordagem de desenvolvimento; espaço reservado para apresentação pessoal verdadeira, preenchível via `src/config/site.ts` sem editar componentes. |
| RF-06 | Seção Contato condicional: renderiza apenas os canais configurados em `src/config/site.ts` (e-mail, GitHub, LinkedIn). Sem dados configurados, a seção, o item de menu e os CTAs de contato/orçamento não são exibidos — nenhum link morto. |
| RF-07 | Footer com nome da marca, links internos, direitos autorais com ano atualizado automaticamente e espaço documentado para link de privacidade quando a página existir. |
| RF-08 | Favicon SVG consistente com a identidade, `robots.txt` e metadados de SEO (título, descrição, canônica, Open Graph, `lang="pt-BR"`). |

## 5. Requisitos não funcionais

- **Desempenho:** HTML estático, zero JavaScript no cliente além do mínimo para o menu mobile; sem fontes externas; meta Lighthouse ≥ 90 em todas as categorias.
- **Acessibilidade:** WCAG 2.1 AA essencial — HTML semântico, landmarks, skip-link, navegação por teclado, foco visível, contraste adequado, textos alternativos, `prefers-reduced-motion` respeitado.
- **SEO:** título e descrição únicos, URL canônica, Open Graph, `lang="pt-BR"`, estrutura de headings coerente.
- **Responsividade:** mobile-first, funcionando de 320px a telas amplas.
- **Segurança e privacidade:** nenhum dado pessoal, token ou chave no repositório; nenhum rastreamento; nenhum formulário sem destino funcional.
- **Custo:** hospedagem e ferramentas exclusivamente gratuitas (GitHub Pages, Git).
- **Manutenibilidade:** conteúdo (projetos, serviços, contato) separado da interface; componentes reutilizáveis; documentação em `README.md`.

## 6. Fora de escopo (v1)

- Páginas `/projetos`, `/servicos`, `/sobre`, `/contato` — seriam vazias agora; planejadas para quando houver conteúdo suficiente.
- Página `/privacidade` — não há coleta de dados na v1; obrigatória apenas se isso mudar.
- Backend, banco de dados, autenticação, CMS, formulário com envio, analytics, i18n.
- Imagem Open Graph (PNG 1200×630) — pendência registrada.

## 7. Conteúdo e integridade

- Projetos exibidos são reais, vindos de repositórios públicos no GitHub, com links verificados. O estado exibido (`publicado`, `em-desenvolvimento`, `aberto`) reflete o que os repositórios indicam.
- Nenhum cliente, depoimento, resultado, certificação, tempo de experiência ou entrega fictícia é apresentado como fato.
- Dados de contato, biografia e links sociais não são inventados: ficam `null` até configuração real.

## 8. Arquitetura

- **Stack:** Astro 5 estático + TypeScript strict. Sem framework de UI no cliente.
- **Dependências:** `astro` (produção); `typescript` e `@astrojs/check` (desenvolvimento, verificação de tipos). Justificativa: site de conteúdo estático não exige linter nem suíte de testes na v1; `astro check` + `astro build` cobrem a verificação.
- **Estrutura:**
  - `src/config/site.ts` — marca, domínio, contato, dados do responsável.
  - `src/data/` — projetos e serviços tipados.
  - `src/components/` — seções e cards.
  - `src/layouts/BaseLayout.astro` — `<head>`, SEO, skip-link.
  - `src/styles/` — tokens e estilos globais.
  - `src/pages/` — páginas da rota.
- **Deploy:** build estático em `dist/`, publicado no GitHub Pages via GitHub Actions; domínio próprio via `public/CNAME` + DNS (passos manuais documentados no README).

## 9. Critérios de aceitação

- Página inicial apresenta corretamente a VulgoCode, com visual consistente (tema escuro, roxo de destaque).
- Funciona em celular e desktop; acessível por teclado com foco visível.
- Todos os links e botões renderizados têm destinos funcionais.
- Nenhum texto fictício apresentado como fato.
- SEO básico, metadados e favicon configurados.
- `npm run check` e `npm run build` executam sem erros.
- README explica execução, publicação e configuração de domínio; limitações e pendências registradas.

## 10. Riscos e decisões pendentes

| Item | Situação |
|---|---|
| Canais de contato | Resolvido — e-mail, GitHub e LinkedIn configurados em `site.ts`; a UI se adapta automaticamente ao que existir |
| Biografia | Preenchida com dados públicos do GitHub — revisar texto em `site.ts` |
| Projetos reais | Resolvido — 5 projetos públicos verificados em `projects.ts`; ampliar conforme novos trabalhos |
| Imagem Open Graph PNG | Pendente — gerar 1200×630 e referenciar em `BaseLayout` |
| DNS do domínio | Pendente — repositório e Pages ativos com deploy automático funcionando; trocar a zona estacionada (`dns-parking.com`, IP `2.57.91.91`) pelos registros do GitHub Pages e ativar Enforce HTTPS |
