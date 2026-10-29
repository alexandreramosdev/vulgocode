# VulgoCode — site institucional

Site institucional da VulgoCode, marca independente de desenvolvimento de software. Landing page estática em `vulgocode.com.br`, construída com Astro + TypeScript, sem backend, banco de dados ou serviços pagos.

## Requisitos

- Node.js 20 ou superior (desenvolvido com Node 24)
- npm

## Instalação e execução

```bash
npm install        # instala as dependências
npm run dev        # servidor local em http://localhost:4321
npm run check      # verificação de tipos e acessibilidade (astro check)
npm run build      # gera o site estático em dist/
npm run preview    # serve o build local para conferência
```

Lint e testes automatizados não existem nesta versão: o site é estático e sem lógica de negócio; `astro check` + `astro build` são as verificações disponíveis.

## Estrutura

```
src/
├── config/site.ts        # marca, contato, dados do responsável (fonte única)
├── data/projects.ts      # projetos exibidos na página
├── data/services.ts      # serviços exibidos na página
├── styles/               # tokens visuais e estilos globais
├── layouts/BaseLayout.astro
├── components/           # seções e cards
└── pages/index.astro     # página única da v1
public/                   # favicon, robots.txt, CNAME do domínio
```

## Como editar o conteúdo

| O que mudar | Onde |
|---|---|
| Adicionar/editar projeto | `src/data/projects.ts` — inclua um objeto no array; links de demo/repositório só aparecem se preenchidos |
| Publicar/ocultar serviço | `src/data/services.ts` — altere `enabled` |
| E-mail, GitHub, LinkedIn | `src/config/site.ts` — enquanto forem `null`, a seção de contato e os CTAs de contato/orçamento **não aparecem** (evita links mortos) |
| Apresentação pessoal | `src/config/site.ts` — preencha `owner.name` e `owner.bio`; o bloco aparece automaticamente na seção Sobre |
| Cores, tipografia, espaçamento | `src/styles/tokens.css` |
| Textos das seções | Componentes correspondentes em `src/components/` |

Para adicionar uma página nova (ex.: `/servicos`), crie um arquivo em `src/pages/` (ex.: `src/pages/servicos.astro`) e ajuste a navegação em `src/config/site.ts` para usar a URL em vez do âncora.

## Publicação no GitHub Pages

- **Repositório:** `alexandreramosdev/vulgocode` (público), branch `main`.
- **Deploy:** automático via GitHub Actions (`.github/workflows/deploy.yml`) — cada push na `main` gera o build e publica no GitHub Pages (**Settings → Pages → Source: GitHub Actions**).
- **Domínio:** `vulgocode.com.br` (registrado em **Settings → Pages → Custom domain** e mantido pelo arquivo `public/CNAME`). O endereço `alexandreramosdev.github.io/vulgocode/` redireciona para ele — comportamento esperado do GitHub Pages.
- **HTTPS:** em ativação — o certificado é emitido automaticamente pelo GitHub após o DNS propagar; ativar **Enforce HTTPS** em **Settings → Pages** quando disponível.

### Como configurar o domínio próprio (passo a passo)

Referência completa para reconfigurar do zero (ex.: mudança de hospedagem ou de registrador):

1. **GitHub — Custom domain:** em **Settings → Pages**, mantenha **Source: GitHub Actions** e preencha **Custom domain** com `vulgocode.com.br`. O arquivo `public/CNAME` (já no repositório) mantém o domínio entre deploys.
2. **DNS — registros apontando para o GitHub Pages** (zona gerenciada na Hostinger):

   | Tipo | Nome | Valor |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | CNAME | `www` | `alexandreramosdev.github.io` |

   Observações: o painel da Hostinger permite apenas **um** registro por nome — um único A já publica o site; `185.199.109.153`, `185.199.110.153` e `185.199.111.153` são redundância opcional, assim como os AAAA `2606:50c0:8000::153` a `2606:50c0:8003::153`.
3. **Propagação:** aguarde de minutos a ~24h e confirme em **Settings → Pages** que a verificação do domínio passou (checagem rápida: `dig +short A vulgocode.com.br`).
4. **HTTPS:** com o DNS ativo, o certificado é emitido automaticamente; ative **Enforce HTTPS** em **Settings → Pages**.

Nenhuma alteração de DNS ou de conta é feita por este repositório — os passos acima são manuais.

**Limpeza opcional:** se algum dia o domínio personalizado for removido, limpe o campo em **Settings → Pages** e ajuste `site` (`astro.config.mjs`) e o arquivo `public/CNAME` de acordo.

## Limitações e pendências da v1

- Sem formulário de contato: não há backend; o contato usa `mailto:` quando o e-mail for configurado.
- Os canais de contato aparecem conforme o preenchimento em `src/config/site.ts`; o botão de orçamento exige um e-mail cadastrado.
- Os projetos exibidos em `src/data/projects.ts` são reais, com links verificados; mantenha o campo `status` fiel ao estado de cada repositório. O estado `aberto` significa código público sem versão publicada.
- Imagem Open Graph (1200×630 PNG) ainda não existe; instrução para adicioná-la está em `src/layouts/BaseLayout.astro`.
- Sem analytics, cookies ou coleta de dados — por isso a página `/privacidade` não foi criada.
- Demais pendências registradas em `TASKS.md`.

## Documentos

- `SPEC.md` — requisitos funcionais, não funcionais e critérios de aceitação.
- `TASKS.md` — tarefas priorizadas e pendências do proprietário.
