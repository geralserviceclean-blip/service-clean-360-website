import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Service Clean 360 | Limpeza Profissional para Empresas",
  description: "Limpeza profissional 360° para empresas, ginásios, lojas e fábricas. Equipe especializada, produtos ecológicos e atendimento 24h. Solicite seu orçamento gratuito!",
  keywords: "limpeza empresarial, limpeza industrial, limpeza ginásio, limpeza lojas, service clean 360, limpeza profissional",
  authors: [{ name: "Service Clean 360" }],
  openGraph: {
    title: "Service Clean 360 | Limpeza Profissional para Empresas",
    description: "Limpeza profissional 360° para empresas, ginásios, lojas e fábricas. Equipe especializada e produtos ecológicos.",
    type: "website",
    locale: "pt_BR",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}