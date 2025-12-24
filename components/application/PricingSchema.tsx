import React from 'react';

interface PricingSchemaProps {
    planos: Array<{
        id: number;
        nome: string;
        precoEmCentavos: number;
        descricao?: string;
    }>;
}

const PricingSchema = ({ planos }: PricingSchemaProps) => {
    // Service Schema for each plan
    const serviceSchemas = planos.map((plano) => ({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Software as a Service',
        name: `Plano ${plano.nome} - Peças Por Código`,
        description: `Plano ${plano.nome} para busca e cotação de peças automotivas`,
        provider: {
            '@type': 'Organization',
            name: 'Peças Por Código',
            url: 'https://www.pecasporcodigo.com.br',
        },
        areaServed: {
            '@type': 'Country',
            name: 'Brasil',
        },
        offers: {
            '@type': 'Offer',
            price: (plano.precoEmCentavos / 100).toFixed(2),
            priceCurrency: 'BRL',
            priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: (plano.precoEmCentavos / 100).toFixed(2),
                priceCurrency: 'BRL',
                referenceQuantity: {
                    '@type': 'QuantitativeValue',
                    value: '1',
                    unitCode: 'MON',
                    unitText: 'mês',
                },
            },
            availability: 'https://schema.org/InStock',
            url: 'https://www.pecasporcodigo.com.br/signup',
            validFrom: '2024-01-01',
        },
    }));

    // Product Schema for subscription plans
    const productSchemas = planos.map((plano) => ({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `Assinatura ${plano.nome} - Peças Por Código`,
        description: `Assinatura mensal do plano ${plano.nome} com acesso completo à plataforma de busca de peças automotivas`,
        brand: {
            '@type': 'Brand',
            name: 'Peças Por Código',
        },
        offers: {
            '@type': 'Offer',
            price: (plano.precoEmCentavos / 100).toFixed(2),
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
            url: 'https://www.pecasporcodigo.com.br/pricing',
            priceValidUntil: '2025-12-31',
            itemCondition: 'https://schema.org/NewCondition',
        },
        category: 'Software',
    }));

    return (
        <>
            {serviceSchemas.map((schema, index) => (
                <script
                    key={`service-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            {productSchemas.map((schema, index) => (
                <script
                    key={`product-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
};

export default PricingSchema;
