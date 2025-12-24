# Peças Por Código — frontend

[➡️ Acesse ao vivo: www.pecasporcodigo.com.br](https://www.pecasporcodigo.com.br/)

Uma plataforma para encontrar e comparar peças automotivas pelo código, conectando compradores a fornecedores de forma simples e rápida.

> Este repositório contém o frontend (Next.js) da aplicação Peças Por Código.

## ✨ Principais recursos
- Busca de peças pelo código
- Curva A (dashboard)
- Cadastro e listagem de fornecedores
- Planos e página de preços
- Páginas institucionais (Sobre, Contato, Obrigado)
- Interface responsiva com tema claro/escuro
- SEO completo (Open Graph, Twitter, JSON‑LD) e sitemap/robots automáticos
- PWA básico (manifest e ícones) e boas práticas de acessibilidade

## 🔗 Link ao vivo
- Produção: https://www.pecasporcodigo.com.br/

## 🧱 Stack técnica
- Next.js (App Router) 14
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui + Radix UI
- next-themes (tema dark/light)

## 🚀 Começando

Pré‑requisitos:
- Node.js 18+

Instalação e execução local:
```bash
# 1) Instalar dependências
npm install

# 2) Definir variáveis de ambiente (opcional, ver abaixo)
# Windows PowerShell
$env:NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# 3) Rodar em desenvolvimento
npm run dev

# 4) Build de produção
npm run build
npm start
```

## ⚙️ Variáveis de ambiente
- `NEXT_PUBLIC_SITE_URL` — URL base do site (usada em metadata, Open Graph, robots, sitemap, etc.).
  - Exemplo `.env.production`:
  ```bash
  NEXT_PUBLIC_SITE_URL=https://www.pecasporcodigo.com.br
  ```

## 🧩 Scripts
- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — cria o build de produção
- `npm start` — inicia o servidor em modo produção
- `npm run lint` — executa o linter

## 🔍 SEO & PWA
Este projeto já inclui boas práticas implementadas no `app/layout.tsx` e rotas do App Router:
- Metadata centralizada (título, descrição, Open Graph, Twitter, ícones, theme-color)
- JSON‑LD (Organization e WebSite)
- `app/robots.ts` — gera `robots.txt` com `host` e `sitemap`
- `app/sitemap.ts` — gera `sitemap.xml` com prioridades e frequências
- `app/manifest.json` — manifest PWA com ícones e cores do tema

Para funcionar corretamente em produção, configure `NEXT_PUBLIC_SITE_URL` com o domínio final.

## 📦 Estrutura (alto nível)
- `app/` — rotas, páginas e layout (App Router)
- `components/` — componentes reutilizáveis de UI e aplicação
- `public/` — imagens e ativos públicos
- `utils/` e `interfaces/` — utilitários e tipos/contratos

## 🛠️ Desenvolvimento e Deploy
Pode ser publicado facilmente em serviços como Vercel ou qualquer host compatível com Node.js.
- Certifique‑se de expor `NEXT_PUBLIC_SITE_URL` no ambiente de produção.

## 🤝 Contribuição
Contribuições são bem‑vindas! Abra uma issue ou envie um pull request com sua proposta.

## 📄 Licença
Este projeto é disponibilizado sob Business Source License 1.1 (BUSL‑1.1).

Parâmetros:
- Licenciante: Robson Cassiano
- Licensed Work: Peças Por Código — frontend
- Concessão de Uso Adicional (Additional Use Grant): nenhuma
- Data de Mudança (Change Date): 2028-11-13
- Licença de Mudança (Change License): Apache-2.0

Observações:
- A BUSL é uma licença de código disponível (source‑available) e não é aprovada pela OSI. A produção/uso comercial pode exigir uma licença comercial antes da Data de Mudança.
- Na Data de Mudança indicada acima, a versão coberta passa a estar sob a Licença de Mudança informada.

Consulte o arquivo `LICENSE` na raiz do repositório para o texto completo.

## 📬 Contato
- Site: https://www.pecasporcodigo.com.br/
- E‑mail: contato@pecasporcodigo.com.br (exemplo)
