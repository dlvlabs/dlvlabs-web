import type { Metadata } from "next";

import { Header } from "@dlvlabs/ui";

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
      <body>
        <main>
          <TanstackQueryProvider>
            <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
              <Header />
              <div className="flex-1 flex flex-col items-center justify-center pt-28">
                {children}
              </div>
            </div>
          </TanstackQueryProvider>
        </main>
      </body>
    </html>
  );
}
