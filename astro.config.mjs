import { defineConfig } from 'astro/config';

// O domínio final é usado para canônicas, sitemap e metadados de SEO.
// Enquanto o DNS não apontar para a hospedagem, o build continua válido:
// altere apenas se o site for publicado temporariamente em um subcaminho.
export default defineConfig({
  site: 'https://vulgocode.com.br',
});
