'use client'

import { usePathname } from 'next/navigation'
import { SessionProvider } from "next-auth/react";
import { TRPCProvider } from "@/lib/trpc-client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import BreadcrumbComponent from "@/components/breadcrumb";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const isBusinessTheme = pathname?.startsWith('/para-empresas')
  const footerTheme = isBusinessTheme ? 'blue' : 'gold'
  const headerTheme = isBusinessTheme ? 'blue' : 'gold'

  return (
    <SessionProvider>
      <TRPCProvider>
        <div className={`flex min-h-screen flex-col ${isBusinessTheme ? 'theme-blue' : ''}`}>
          <Header theme={headerTheme} />
          <BreadcrumbComponent />
          <main className="flex-1">
            {children}
          </main>
          <Footer theme={footerTheme} />
          <ScrollToTop />
        </div>
      </TRPCProvider>
    </SessionProvider>
  );
}
