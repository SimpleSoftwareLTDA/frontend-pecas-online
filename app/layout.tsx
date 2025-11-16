import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/application/Header";
import Footer from "@/components/application/Footer";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";
import FAQButton from "@/components/application/FAQButton";
import type { Metadata } from "next";
import type { Viewport } from "next";

// Base site URL for metadata (used in sitemap/robots as well)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Peças Por Código — Encontre peças pelo código",
    template: "%s | Peças Por Código",
  },
  description:
    "Plataforma para encontrar e comparar peças automotivas pelo código, com fornecedores, planos e cadastro simples.",
  keywords: [
    "peças",
    "autopeças",
    "código da peça",
    "catálogo",
    "fornecedores",
    "oficina",
  ],
  authors: [{ name: "Peças Por Código" }],
  creator: "Peças Por Código",
  applicationName: "Peças Por Código",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Peças Por Código — Encontre peças pelo código",
    description:
      "Encontre peças automotivas pelo código e conecte-se com fornecedores.",
    siteName: "Peças Por Código",
    images: [
      {
        url: "/images/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Peças Por Código",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peças Por Código — Encontre peças pelo código",
    description:
      "Encontre peças automotivas pelo código e conecte-se com fornecedores.",
    images: ["/images/logo-black.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-favicon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  other: {
    "color-scheme": "light dark",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light dark",
  viewportFit: "cover",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <GoogleTagManager gtmId="AW-16976370308" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Peças Por Código',
              url: siteUrl,
              logo: `${siteUrl}/images/logo-black.png`,
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Peças Por Código',
              url: siteUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.className} antialiased leading-5 flex flex-col min-h-screen text-xl relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <FAQButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
