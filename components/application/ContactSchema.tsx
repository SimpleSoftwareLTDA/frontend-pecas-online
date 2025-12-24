import React from 'react';

const ContactSchema = () => {
    const contactPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contato - Peças Por Código',
        description: 'Entre em contato conosco para dúvidas, sugestões ou suporte.',
        url: 'https://www.pecasporcodigo.com.br/contact',
        mainEntity: {
            '@type': 'Organization',
            name: 'Peças Por Código',
            contactPoint: {
                '@type': 'ContactPoint',
                email: 'contato@pecasporcodigo.com.br',
                contactType: 'Customer Service',
                availableLanguage: ['pt-BR'],
                areaServed: 'BR',
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
    );
};

export default ContactSchema;
