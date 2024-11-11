import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Marketing Automation | Neural Pattern Recognition for 110X Growth',
  description: 'Transform your marketing with AI-powered automation and neural pattern recognition. Achieve 110X content reach with automated content creation and distribution.',
  keywords: [
    'AI marketing automation',
    'neural pattern recognition',
    'marketing automation platform',
    'AI content strategy',
    'automated content distribution',
    'content scaling automation',
    'AI brand voice optimization',
    'marketing pattern recognition',
    'automated marketing analytics',
    'content multiplication',
    'organic content reach',
    'AI-powered analytics',
    'marketing ROI optimization',
    'brand voice automation',
    'content strategy automation'
  ].join(', '),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://absstudios.com" />
        <meta name="theme-color" content="#270B3F" />
      </head>
      <body className="font-sans antialiased bg-[hsl(var(--bg-dark))] text-[hsl(var(--text-light))]">
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--flame-orange)/0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--flame-red)/0.15),transparent_70%)]" />
          <div className="relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}