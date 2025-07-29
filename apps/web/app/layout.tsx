import { Header } from "@dlvlabs/ui";
import type { Metadata } from "next";
import localFont from "next/font/local";
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
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>
          <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-center">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
