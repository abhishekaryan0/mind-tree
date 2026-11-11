import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Mind Tree Communication',
  description: 'Privacy Policy of Mind Tree Communication Limited (Hong Kong).'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Legal &amp; Privacy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Effective Date: November 2026 | Mind Tree Communication Limited (Hong Kong)
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 leading-relaxed">
            <p>
              Mind Tree Communication Limited (&quot;Mind Tree&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), headquartered at Unit 1805, 18/F, Crawford House, 70 Queen&apos;s Road Central, Central, Hong Kong, respects your privacy and is committed to protecting personal data. This privacy policy informs you about how we handle personal data when you visit our website, use our wholesale voice, A2P SMS, CPaaS APIs, and cloud call center dialer services.
            </p>

            <h3 className="text-base font-bold text-slate-900">1. Information We Collect</h3>
            <p>
              We collect information you provide directly to us when requesting rate decks, inquiring about bilateral interconnects, or signing up for services, including your name, company name, corporate email address (<strong className="text-slate-800">connect@mindtreecom.com</strong>), IP addresses, and routing preferences. In the course of telecommunication transit, we process Call Detail Records (CDRs) and message telemetry strictly for switching, routing, and billing reconciliation.
            </p>

            <h3 className="text-base font-bold text-slate-900">2. How We Use Your Information</h3>
            <p>
              We use collected information to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provision and operate wholesale voice SIP trunks and SMPP messaging channels</li>
              <li>Authenticate API requests and prevent unauthorized access or telecom fraud</li>
              <li>Generate accurate billing, invoicing, and bilateral swap reconciliations</li>
              <li>Comply with applicable telecommunication laws and regulatory directives in Hong Kong and international jurisdictions</li>
            </ul>

            <h3 className="text-base font-bold text-slate-900">3. Data Retention and Security</h3>
            <p>
              Telecommunication metadata and CDRs are retained strictly in accordance with statutory accounting and regulatory mandates. We implement physical, electronic, and procedural safeguards in accordance with ISO 27001 standards to protect against unauthorized access.
            </p>

            <h3 className="text-base font-bold text-slate-900">4. Contacting Our Data Protection Officer</h3>
            <p>
              If you have any questions regarding this Privacy Policy or our data handling practices, please write to our privacy desk at:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <strong>Mind Tree Communication Limited</strong><br />
              Unit 1805, 18/F, Crawford House, 70 Queen&apos;s Road Central, Central, Hong Kong<br />
              Email: <a href="mailto:connect@mindtreecom.com" className="text-blue-600 underline">connect@mindtreecom.com</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
