'use client'
import {
    IoCloseOutline,
    IoListOutline,
    IoLogInOutline,
    IoLogOutOutline,
    IoPeopleOutline,
    IoPersonOutline,
    IoReceiptOutline,
    IoSearchOutline,
    IoStorefrontOutline
} from "react-icons/io5";
import Link from "next/link";
import {useUIStore} from '@/store'
import clsx from "clsx";

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);

    return (<div className="">
            {isSideMenuOpen && (
                <div className="fixed top-0 w-screen h-screen z-10 bg-zinc-50/70 dark:bg-black/70"></div>)}
            {isSideMenuOpen && (
                <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop backdrop-blur-sm"
                     onClick={closeMenu}></div>)}

            <nav
                className={
                    clsx("fixed p-5 top-0 right-0 md:w-[500px] w-[350px] bg-foreground h-screen z-20 shadow-2xl transform transition-all duration-300 text-black", {
                        "translate-x-full": !isSideMenuOpen,
                    })
                }>
                <Link href="/" className="absolute top-5 left-5 font-mono font-bold text-xl md:hidden block">Rapture
                    Board Games</Link>
                <IoCloseOutline className="absolute top-2 right-2 " size={50} onClick={closeMenu}/>
                <div className="relative mt-14">
                    <IoSearchOutline size={20} className={"absolute translate-y-1/2 left-2 cursor-pointer"}/>
                    <input
                        className="w-full px-10 py-2 border-b-2 focus:border-blue-500 focus:outline-none text-xl  "
                        type="text" placeholder="Buscar"/>
                </div>
                <Link href="/"
                      className="flex gap-4 items-center w-full p-2 my-4 hover:bg-zinc-200 transition-all">
                    <IoPersonOutline size={30} className=" "/>
                    <span className="text-xl">Cuenta</span>
                </Link>
                <Link href="/"
                      className="flex gap-4 items-center w-full p-2 my-4 hover:bg-zinc-200 transition-all">
                    <IoReceiptOutline size={30} className=" "/>
                    <span className="text-xl">Ordenes</span>
                </Link>
                <Link href="/"
                      className="flex gap-4 items-center w-full p-2 my-4 hover:bg-zinc-200 transition-all">
                    <IoLogInOutline size={30} className=" "/>
                    <span className="text-xl">Ingresar</span>
                </Link>
                <Link href="/"
                      className="flex gap-4 items-center w-full p-2 my-4 hover:bg-zinc-200 transition-all">
                    <IoLogOutOutline size={30} className=" "/>
                    <span className="text-xl">Salir</span>
                </Link>
                <hr className="bg-zinc-200 w-full my-2"/>
                <Link href="/"
                      className="flex gap-4 items-center w-full p-2 my-4 hover:bg-zinc-200 transition-all">
                    <IoStorefrontOutline size={30} className=" "/>
                    <span className="text-xl">Productos</span>
                </Link>
                <Link href="/"
                      className="flex gap-4 items-center w-full p-2 my-4 hover:bg-zinc-200 transition-all">
                    <IoListOutline size={30} className=" "/>
                    <span className="text-xl">Ordenes</span>
                </Link>
                <Link href="/"
                      className="flex gap-4 items-center w-full p-2 my-4 hover:bg-zinc-200 transition-all">
                    <IoPeopleOutline size={30} className=" "/>
                    <span className="text-xl">Usuarios</span>
                </Link>
            </nav>
        </div>
    )
}