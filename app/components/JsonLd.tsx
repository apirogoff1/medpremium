export default function JsonLd() {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MyProject',
    description: 'Professional AI-ready starter kit for modern web applications.',
    url: APP_URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'RUB',
    },
    author: {
      '@type': 'Organization',
      name: 'MyProject Team',
      url: APP_URL,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
