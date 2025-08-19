import type { Metadata } from "next";

import { CommonLayout } from "@dlvlabs/ui";

import { TanstackQueryProvider } from "@/app/providers";
import { IBM_Plex_Sans } from "next/font/google";
import "../../styles/index.css";

export const metadata: Metadata = {
  title: "IBC Mon",
  description:
    "Real-time IBC channel monitoring solution for tracking channel activities, transactions, and timeout events across the Cosmos ecosystem",
};

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
  fallback: ["system-ui", "Arial"],
  preload: true,
  adjustFontFallback: true,
  style: ["normal", "italic"],
});

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSans.className}>
      <body className="light">
        <main>
          <TanstackQueryProvider>
            <CommonLayout className="min-h-screen flex flex-col mx-auto items-center justify-center pt-28 md:px-16 lg:px-24 xl:px-32">
              {children}
            </CommonLayout>
          </TanstackQueryProvider>
        </main>
      </body>
    </html>
  );
}
