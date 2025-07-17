import type { Metadata } from "next";

import { Header } from "@dlvlabs/ui";

import { TanstackQueryProvider } from "@/app/providers";
import "../../styles/index.css";

export const metadata: Metadata = {
  title: "IBC Mon",
  description:
    "Real-time IBC channel monitoring solution for tracking channel activities, transactions, and timeout events across the Cosmos ecosystem",
};
export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <TanstackQueryProvider>
            <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
              <Header />
              <div className="flex-1 flex flex-col items-center justify-center">
                {children}
              </div>
            </div>
          </TanstackQueryProvider>
        </main>
      </body>
    </html>
  );
}
