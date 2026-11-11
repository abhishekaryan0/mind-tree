import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Mind Tree Communication',
  description: 'Terms of Service for Mind Tree Communication Limited (Hong Kong).'
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Effective Date: November 2026 | Mind Tree Communication Limited (Hong Kong)
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 leading-relaxed">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the telecommunication services, wholesale voice routes, A2P SMS pipelines, CPaaS APIs, and cloud dialer platforms provided by Mind Tree Communication Limited, a company incorporated under the laws of Hong Kong.
            </p>

            <h3 className="text-base font-bold text-slate-900">1. Acceptable Use and Traffic Policy</h3>
            <p>
              Customers and interconnecting carriers agree not to use the services for any unlawful purpose, including but not limited to the transmission of unsolicited spam, illegal robocalling, Wangiri fraud, artificial traffic inflation (ATI), or transmission of malware. Mind Tree Communication reserves the right to immediately suspend any SIP trunk or SMPP bind engaged in abusive traffic.
            </p>

            <h3 className="text-base font-bold text-slate-900">2. Service Level Agreement (SLA)</h3>
            <p>
              Mind Tree Communication provides high-availability services with a target core switching uptime of 99.999%. Scheduled maintenance windows are announced to carrier NOC contacts at least 72 hours in advance.
            </p>

            <h3 className="text-base font-bold text-slate-900">3. Rates, Billing and Currency</h3>
            <p>
              Wholesale voice and SMS rates are governed by bilateral master services agreements (MSAs) and periodic rate deck updates sent via email. Unless specified otherwise, all billing is calculated and settled in United States Dollars (USD).
            </p>

            <h3 className="text-base font-bold text-slate-900">4. Governing Law and Jurisdiction</h3>
            <p>
              These Terms and any bilateral dispute arising out of or related to our telecommunication services shall be governed by and construed in accordance with the laws of Hong Kong SAR, without regard to its conflict of law principles.
            </p>

            <h3 className="text-base font-bold text-slate-900">5. Inquiries</h3>
            <p>
              For legal or master services agreement inquiries, please contact:
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
