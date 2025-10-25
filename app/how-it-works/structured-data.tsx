export default function FAQStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What rights do I get when I purchase a script?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "When you purchase a script from us, you receive full and exclusive rights to the screenplay. This includes all production, distribution, and adaptation rights. You'll receive a formal rights transfer agreement that legally transfers ownership from us to you.",
              },
            },
            {
              "@type": "Question",
              name: "How much do your scripts cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Pricing varies based on the type and length of the script. Short film scripts (8-12 pages) are $20, while feature-length scripts (90-120 pages) are $150.",
              },
            },
            {
              "@type": "Question",
              name: "Can you make revisions to a script after purchase?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer revision services for an additional fee. If you need specific changes to adapt the script to your vision, we can discuss the scope of revisions and provide a quote. Minor adjustments may be included in the initial purchase price.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer custom script writing services?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, in addition to our pre-written scripts, we offer custom screenwriting services. If you have a specific concept or story in mind, we can develop it into a full screenplay. Custom scripts are priced differently than our pre-written collection. Contact us to discuss your project needs.",
              },
            },
            {
              "@type": "Question",
              name: "What payment methods do you accept?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We accept various payment methods including bank transfers, major credit cards through secure payment processors, and other electronic payment options. We'll discuss the available payment methods when you're ready to make a purchase.",
              },
            },
          ],
        }),
      }}
    />
  )
}
