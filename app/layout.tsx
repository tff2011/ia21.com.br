import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientLayout } from "./layout-client";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IA21 Educação - Educação Tecnológica para o Futuro",
  description: "Cursos e treinamentos especializados em tecnologias emergentes. Desenvolva habilidades do futuro com a IA21 Educação.",
  keywords: ["tecnologia", "educação", "cursos", "treinamentos", "inovação", "desenvolvimento"],
  authors: [{ name: "IA21 Educação" }],
  creator: "IA21 Educação",
  publisher: "IA21 Educação",
  openGraph: {
    title: "IA21 Educação - Educação Tecnológica para o Futuro",
    description: "Cursos e treinamentos especializados em tecnologias emergentes.",
    url: "https://ia21.com.br",
    siteName: "IA21 Educação",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA21 Educação - Educação Tecnológica para o Futuro",
    description: "Cursos e treinamentos especializados em tecnologias emergentes.",
    creator: "@ia21educacao",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
