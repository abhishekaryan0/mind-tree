import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mindtreecom.com'),
  title: 'Mind Tree Communication | Voice, SMS & CPaaS Solutions',
  description: 'Carrier-grade international VoIP trading, wholesale voice termination, A2P SMS messaging, cloud dialer infrastructure, and enterprise CPaaS APIs. Headquartered in Hong Kong.',
  keywords: [
    'Mind Tree Communication',
    'VoIP Trading',
    'Wholesale Voice',
    'A2P SMS',
    'CPaaS',
    'Call Center Dialer',
    'Predictive Dialer',
    'Bulk SMS CRM',
    'Global DID Numbers',
    'Hong Kong Telecom'
  ],
  authors: [{ name: 'Mind Tree Communication Limited' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png'
  },
  openGraph: {
    title: 'Mind Tree Communication | Voice • SMS • Global Reach',
    description: 'Premier wholesale VoIP trading and CPaaS provider headquartered in Hong Kong.',
    url: 'https://mindtreecom.com',
    siteName: 'Mind Tree Communication',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Mind Tree Communication'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
