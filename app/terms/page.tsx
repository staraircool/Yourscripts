import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Terms & Conditions</h1>
            <p className="text-muted-foreground text-lg">
              Please read these terms carefully before purchasing scripts from YourScripts.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold dark:prose-invert">
            <p>Last Updated: March 26, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to YourScripts ("we," "our," or "us"). These Terms and Conditions govern your use of our website
              and services, including the purchase of screenplay scripts. By accessing our website or purchasing our
              scripts, you agree to be bound by these Terms and Conditions.
            </p>

            <h2>2. Script Purchases</h2>
            <p>
              <strong>2.1 Ownership Transfer:</strong> Upon full payment, you receive exclusive rights to the purchased
              script, including all production, distribution, and adaptation rights.
            </p>
            <p>
              <strong>2.2 Payment:</strong> All payments are processed securely through our approved payment methods.
              Prices are listed in USD and are subject to change without notice.
            </p>
            <p>
              <strong>2.3 Delivery:</strong> Scripts will be delivered electronically in PDF format within 24-48 hours
              after payment confirmation.
            </p>

            <h2>3. Refund Policy</h2>
            <p>
              <strong>3.1 No Refunds:</strong> Due to the digital nature of our products, all sales are final, and we do
              not offer refunds once a script has been delivered.
            </p>
            <p>
              <strong>3.2 Quality Guarantee:</strong> We guarantee that all scripts will be professionally formatted and
              free from grammatical errors. If you find significant formatting or grammatical issues, please contact us
              within 7 days of delivery.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              <strong>4.1 Pre-Purchase:</strong> All scripts listed on our website are the intellectual property of
              YourScripts until purchased.
            </p>
            <p>
              <strong>4.2 Post-Purchase:</strong> After purchase, you receive full intellectual property rights to the
              script as outlined in our Rights Transfer Agreement.
            </p>
            <p>
              <strong>4.3 Loglines:</strong> The free loglines provided before purchase remain the intellectual property
              of YourScripts and may not be used without permission.
            </p>

            <h2>5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our website for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Share, distribute, or resell unpurchased scripts or loglines</li>
              <li>Engage in any activity that disrupts our services</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p>
              YourScripts shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of our services or any scripts purchased from us.
            </p>

            <h2>7. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless YourScripts, its employees, and affiliates from any claims,
              damages, liabilities, costs, or expenses arising from your use of our scripts or violation of these Terms.
            </p>

            <h2>8. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              to our website. Your continued use of our services after any changes indicates your acceptance of the
              modified Terms.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its
              conflict of law provisions.
            </p>

            <h2>10. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Email: wecanhelp@givhlp.xyz
              <br />
              WhatsApp: +917888452882
            </p>

            <div className="mt-12 text-center">
              <p>
                By purchasing scripts from YourScripts, you acknowledge that you have read, understood, and agree to be
                bound by these Terms and Conditions.
              </p>
            </div>
          </div>

          <div className="max-w-md mx-auto mt-12 text-center">
            <Button asChild>
              <Link href="/contact">Contact Us With Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
