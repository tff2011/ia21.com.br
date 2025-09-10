import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientLayout } from "./layout-client";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "IA21 Educação - Cursos de Desenvolvimento Web, React, Next.js",
    template: "%s | IA21 Educação"
  },
  description: "Plataforma educacional especializada em cursos de desenvolvimento web, React, Next.js, JavaScript e tecnologias modernas. Mentorias personalizadas e projetos reais.",
  keywords: [
    "cursos desenvolvimento web",
    "curso react",
    "curso nextjs", 
    "mentoria tecnologia",
    "programação online",
    "bootcamp desenvolvimento",
    "certificação programação",
    "ia21 educação",
    "aprender programar"
  ],
  authors: [{ name: "IA21 Educação", url: "https://ia21.com.br" }],
  creator: "IA21 Educação",
  publisher: "IA21 Educação",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ia21.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IA21 Educação - Cursos de Desenvolvimento Web e Tecnologia",
    description: "Transforme sua carreira com nossos cursos especializados em desenvolvimento web, React, Next.js e tecnologias modernas.",
    url: "https://ia21.com.br",
    siteName: "IA21 Educação",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IA21 Educação - Plataforma de Cursos de Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA21 Educação - Cursos de Desenvolvimento Web",
    description: "Transforme sua carreira com cursos especializados em tecnologias modernas.",
    creator: "@ia21educacao",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
