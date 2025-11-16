import type { Metadata } from "next";
import "./globals.css";
import { geistSans, geistMono} from "@/config/fonts"
import {ViewTransition} from "react";
import {TopMenu} from "@/components";

export const metadata: Metadata = {
  title: "Rapture Board Games ",
  description: "La mejor tienda de Trading Card Games de Toluca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
      <ViewTransition enter="slide-in" exit="slide-out">
          <main className="min-h-screen bg-zinc-50 font-sans dark:bg-black antialiased">
              <div className="px-6 md:px-32">
                  {children}
              </div>
          </main>
      </ViewTransition>
      </body>
    </html>
  );
}
