import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/banda/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AVENIDA",
  description: "Web oficial de Avenida. Conciertos, música, merch y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-avenida-blue text-avenida-text min-h-dvh flex flex-col sm:flex-row">
        <Sidebar />
        <main className="flex-1 overflow-y-auto min-h-dvh">
          {children}
        </main>
      </body>
    </html>
  );
}
