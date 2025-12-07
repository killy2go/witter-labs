// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.witterlabs.de"),

  title: "Witter Labs – Next.js Landingpages & Stripe",
  description:
    "Witter Labs – Entwicklung moderner, schneller Landingpages mit Next.js, React und Stripe-Integration. Performance, SEO und klare Konversionen für Solopreneure & kleine Businesses.",

  // Favicon + Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-256.png",
  },

  // Canonical URL für SEO
  alternates: {
    canonical: "https://www.witterlabs.de",
  },

  // OpenGraph (WhatsApp, LinkedIn, Twitter, iMessage)
  openGraph: {
    title: "Witter Labs – Next.js Landingpages & Stripe",
    description:
      "Schnelle, moderne Landingpages für Solopreneure & kleine Unternehmen. Fokus auf Performance, SEO und klare Struktur.",
    url: "https://www.witterlabs.de",
    siteName: "Witter Labs",
    images: [
      {
        url: "/logo-512.png",
        width: 512,
        height: 512,
        alt: "Witter Labs Logo",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Witter Labs – Next.js Landingpages & Stripe",
    description:
      "Moderne, schnelle Landingpages für Solopreneure & kleine Businesses – mit Next.js, React und Stripe-Integration.",
    images: ["/logo-512.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <Header />

          {/* Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <span>© {new Date().getFullYear()} Witter Labs</span>

              <div className="flex flex-wrap items-center gap-4">
                <span>Next.js · React · Stripe · Vercel</span>
                <div className="flex gap-3">
                  <a href="/impressum" className="hover:text-sky-400">
                    Impressum
                  </a>
                  <a href="/datenschutz" className="hover:text-sky-400">
                    Datenschutz
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Witter Labs",
              url: "https://www.witterlabs.de",
              description:
                "Entwicklung schneller, moderner Landingpages mit Next.js, React und Stripe.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "DE",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
