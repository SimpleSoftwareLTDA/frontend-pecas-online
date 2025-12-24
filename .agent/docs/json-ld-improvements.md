# Melhorias no Schema JSON-LD

## Resumo das Alterações

O schema JSON-LD foi significativamente expandido para melhorar o SEO e a visibilidade nos resultados de busca.

## Schemas Implementados

### 1. **StructuredData** (Global - `Schema.tsx`)
Aplicado em todas as páginas via `layout.tsx`:

- **Organization**: Informações completas da empresa
  - Nome, logo (com ImageObject), descrição
  - Ponto de contato com email
  - Endereço e área de serviço (Brasil)
  
- **WebSite**: Identificação do site com SearchAction
  - Permite que o Google mostre uma caixa de busca nos resultados
  - Template de URL para busca direta
  
- **WebApplication**: Classificação como aplicação de negócios
  - Categoria: BusinessApplication
  - Informações de preço agregado dos planos
  - Rating agregado
  
- **BreadcrumbList**: Navegação estruturada
  - Início, Planos, Sobre, Contato
  - Melhora a navegação nos rich snippets

### 2. **PricingSchema** (`PricingSchema.tsx`)
Aplicado na página `/pricing`:

- **Service Schema**: Para cada plano
  - Tipo de serviço: SaaS
  - Provider (organização)
  - Área de serviço
  
- **Product Schema**: Para cada plano
  - Ofertas com preços em BRL
  - Disponibilidade e validade
  - Categoria: Software

### 3. **ContactSchema** (`ContactSchema.tsx`)
Aplicado na página `/contact`:

- **ContactPage**: Identificação da página de contato
  - Informações de contato estruturadas
  - Email e idiomas disponíveis
  - Área de serviço

### 4. **FAQSchema** (`FAQSchema.tsx`)
Componente reutilizável para páginas com FAQ:

- **FAQPage**: Perguntas e respostas estruturadas
  - Permite rich snippets de FAQ no Google
  - Aceita array de perguntas/respostas como props

## Benefícios SEO

1. **Rich Snippets**: Informações mais ricas nos resultados de busca
2. **Knowledge Graph**: Possibilidade de aparecer no painel de conhecimento do Google
3. **Search Box**: Caixa de busca direta nos resultados do Google
4. **FAQ Snippets**: Perguntas frequentes expandíveis nos resultados
5. **Pricing Information**: Preços visíveis diretamente nos resultados
6. **Breadcrumbs**: Navegação estruturada nos resultados de busca

## Validação

Para validar os schemas implementados:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Google Search Console**: Monitorar rich results após deploy

## Próximos Passos Recomendados

1. Adicionar **LocalBusiness** schema se houver endereço físico
2. Implementar **Review/Rating** schemas quando houver avaliações reais
3. Adicionar **sameAs** links para redes sociais no Organization schema
4. Criar **Article** schema para blog posts (se aplicável)
5. Implementar **VideoObject** schema se houver conteúdo em vídeo

## Arquivos Modificados

- ✅ `components/application/Schema.tsx` - Expandido significativamente
- ✅ `components/application/PricingSchema.tsx` - Novo
- ✅ `components/application/ContactSchema.tsx` - Novo
- ✅ `components/application/FAQSchema.tsx` - Novo
- ✅ `app/layout.tsx` - Atualizado import
- ✅ `app/pricing/page.tsx` - Adicionado PricingSchema
- ✅ `app/contact/page.tsx` - Adicionado ContactSchema
- ✅ `app/page.tsx` - Corrigido input type (search → text)

## Notas Técnicas

- Todos os schemas seguem as especificações do schema.org
- Preços são convertidos de centavos para reais com 2 casas decimais
- Schemas são renderizados como `application/ld+json` no `<head>`
- Componentes são type-safe com TypeScript
- Schemas dinâmicos recebem dados via props
