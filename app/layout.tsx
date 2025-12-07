// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Witter Labs – Next.js Landingpages & Stripe",
  description:
    "Witter Labs – Entwicklung moderner, schneller Landingpages mit Next.js, React und Stripe-Integration.",
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
          <header className="border-b border-slate-800">
            <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
              <span className="font-semibold tracking-tight">
                Witter<span className="text-sky-400"> Labs</span>
              </span>
              <nav className="flex gap-4 text-sm text-slate-300">
                <a href="/#services" className="hover:text-sky-400">
                  Services
                </a>
                <a href="/#tech" className="hover:text-sky-400">
                  Tech-Stack
                </a>
                <a href="/#about" className="hover:text-sky-400">
                  Über mich
                </a>
                <a href="/#contact" className="hover:text-sky-400">
                  Kontakt
                </a>
              </nav>
            </div>
          </header>

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
      </body>
    </html>
  );
}
