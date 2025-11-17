import type {Metadata} from "next";
import "@/app/globals.css";
import {Sidebar, TopMenu} from "@/components";
import {ViewTransition} from 'react'

export const metadata: Metadata = {
    title: "Rapture Board Games | ",
    description: "Los mejores productos de de Trading Card Games de Toluca.",
};

export default function ShopLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransition enter="slide-in" exit="slide-out">
            <main className="min-h-screen bg-zinc-50 font-sans dark:bg-black antialiased">
                <TopMenu/>
                <Sidebar/>
               <div className="px-6 md:px-32">
                   {children}
               </div>
            </main>
        </ViewTransition>
    );
}
