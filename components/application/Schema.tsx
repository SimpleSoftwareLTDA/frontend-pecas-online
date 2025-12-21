import React from 'react';

const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Peças Por Código',
    url: 'https://www.pecasporcodigo.com.br',
    logo: 'https://www.pecasporcodigo.com.br/_next/image?url=%2Fimages%2Flogo-white.png&w=384&q=75',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contato@pecasporcodigo.com.br',
      contactType: 'Customer Service',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
