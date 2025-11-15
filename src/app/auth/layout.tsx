import type {Metadata} from "next";
import "@/app/globals.css";
import {geistMono, geistSans} from "@/config/fonts"

export const metadata: Metadata = {
    title: "Rapture Board Games | Admin",
    description: "Los mejores productos de de Trading Card Games de Toluca.",
};

export default function AuthLayout({
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
