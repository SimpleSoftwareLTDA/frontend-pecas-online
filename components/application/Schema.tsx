import React from 'react';

const StructuredData = () => {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Peças Por Código',
    alternateName: 'PPC',
    url: 'https://www.pecasporcodigo.com.br',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.pecasporcodigo.com.br/_next/image?url=%2Fimages%2Flogo-white.png&w=384&q=75',
      width: 384,
      height: 96,
    },
    description: 'Plataforma de busca de peças automotivas pelo código original. Encontre fornecedores e compare preços de forma rápida e precisa.',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contato@pecasporcodigo.com.br',
      contactType: 'Customer Service',
      availableLanguage: ['pt-BR'],
      areaServed: 'BR',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressLocality: 'Brasil',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Peças Por Código',
    url: 'https://www.pecasporcodigo.com.br',
    description: 'Busque peças automotivas pelo código original e encontre os melhores fornecedores do mercado.',
    inLanguage: 'pt-BR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.pecasporcodigo.com.br/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // WebApplication Schema
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Peças Por Código',
    url: 'https://www.pecasporcodigo.com.br',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'BRL',
      lowPrice: '0',
      highPrice: '1500',
      offerCount: '2',
    },
    description: 'Sistema de busca e cotação de peças automotivas pelo código original.',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    softwareVersion: '1.0',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://www.pecasporcodigo.com.br',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Planos',
        item: 'https://www.pecasporcodigo.com.br/pricing',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Sobre',
        item: 'https://www.pecasporcodigo.com.br/about',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contato',
        item: 'https://www.pecasporcodigo.com.br/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default StructuredData;
