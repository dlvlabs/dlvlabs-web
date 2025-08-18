import { CommonLayout, tcm } from "@dlvlabs/ui";
import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  ShootingStars,
  StarsBackground,
} from "./components/background-section";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "DLV-Labs",
  description:
    "DLVlabs specializes in Cosmos SDK, CometBFT, and IBC, delivering infrastructure and development support for blockchain ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black/[0.96]`}>
        <main>
          <CommonLayout>
            <div className="relative flex flex-col w-full overflow-hidden  antialiased md:items-center md:justify-center">
              <div
                className={tcm(
                  "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                  "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
                )}
              />
              {children}
            </div>
            <ShootingStars />
            <StarsBackground />
          </CommonLayout>
        </main>
      </body>
    </html>
  );
}
