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

Repositório: **`alexandreramosdev/vulgocode`** (público). O GitHub Pages está configurado como **Source: GitHub Actions**: cada push na `main` dispara o workflow `.github/workflows/deploy.yml` (build + deploy).

O site está publicado em **https://vulgocode.com.br** (HTTP já ativo; certificado HTTPS do GitHub em emissão — ativar **Enforce HTTPS** em **Settings → Pages** quando disponível). O endereço `alexandreramosdev.github.io/vulgocode/` redireciona para o domínio personalizado — comportamento esperado do GitHub Pages.

### Domínio próprio (`vulgocode.com.br`)

Configurado e ativo (zona DNS gerenciada na Hostinger). Referência dos registros em uso:

- **A** (`@`): `185.199.108.153` — o painel da Hostinger permite apenas um registro por nome; os demais IPs oficiais do GitHub Pages (`185.199.109.153`, `185.199.110.153`, `185.199.111.153`) são redundância opcional
- **CNAME** (`www`): `alexandreramosdev.github.io`
- **AAAA** (opcional): `2606:50c0:8000::153` a `2606:50c0:8003::153`

Pendente: ativar **Enforce HTTPS** em **Settings → Pages** assim que o certificado for emitido (emissão automática, de minutos a ~24h após o DNS propagar).

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
