import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/application/Header";
import Footer from "@/components/application/Footer";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";
import FAQButton from "@/components/application/FAQButton";
import OrganizationSchema from "@/components/application/Schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Peças Por Código - Encontre a peça certa para o seu veículo",
  description:
    "Busque peças automotivas pelo código original. Encontre exatamente o que você precisa de forma rápida e precisa.",
  keywords: ["peças automotivas", "código de peça", "carros", "mecânica", "auto peças"],
  authors: [{ name: "Peças Por Código" }],
  openGraph: {
    title: "Peças Por Código - Encontre a peça certa",
    description: "Busque peças automotivas pelo código original.",
    type: "website",
    locale: "pt_BR",
    siteName: "Peças Por Código",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peças Por Código",
    description: "Busque peças automotivas pelo código original.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <GoogleTagManager gtmId="AW-16976370308" />
        <OrganizationSchema />
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
