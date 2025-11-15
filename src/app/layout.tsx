import type { Metadata } from "next";
import "./globals.css";
import { geistSans, geistMono} from "@/config/fonts"

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <main>
           {children}
       </main>
      </body>
    </html>
  );
}
