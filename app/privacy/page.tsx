import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">How we collect, use, and protect your personal information</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold dark:prose-invert">
            <p>Last Updated: March 26, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              At YourScripts, we respect your privacy and are committed to protecting your personal data. This Privacy
              Policy explains how we collect, use, and safeguard your information when you visit our website or use our
              services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              <strong>2.1 Personal Information:</strong> We may collect personal information that you provide directly
              to us, including:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing information</li>
              <li>Communication preferences</li>
            </ul>
            <p>
              <strong>2.2 Usage Data:</strong> We may automatically collect certain information about your device and
              how you interact with our website, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referring website</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing and maintaining our services</li>
              <li>Processing transactions and sending transaction notifications</li>
              <li>Responding to your inquiries and requests</li>
              <li>Sending you marketing communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except in the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist us in operating our website and conducting business</li>
              <li>To comply with legal requirements, such as court orders or legal processes</li>
              <li>To protect our rights, property, or safety, or the rights, property, or safety of others</li>
              <li>In connection with a business transfer, such as a merger, acquisition, or sale of assets</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided in Section 10.</p>

            <h2>7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can set
              your browser to refuse all or some browser cookies, but this may affect your ability to use certain
              features of our website.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
              information from children. If you are a parent or guardian and believe your child has provided us with
              personal information, please contact us.
            </p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
            <p>
              Email: wecanhelp@givhlp.xyz
              <br />
              WhatsApp: +917888452882
            </p>
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
