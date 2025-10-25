export default function ScriptStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Professional Screenplay Scripts",
          description: "High-quality short film and feature film scripts for filmmakers",
          offers: [
            {
              "@type": "Offer",
              name: "Short Film Scripts",
              price: "20.00",
              priceCurrency: "USD",
              description: "Original 8-12 page short film scripts across all genres",
            },
            {
              "@type": "Offer",
              name: "Feature Film Scripts",
              price: "150.00",
              priceCurrency: "USD",
              description: "Original 90-120 page feature film scripts across all genres",
            },
          ],
        }),
      }}
    />
  )
}
