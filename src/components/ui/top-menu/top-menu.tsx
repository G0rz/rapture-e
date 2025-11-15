'use client'
import Link from "next/link";
import {IoCartOutline, IoSearchOutline} from "react-icons/io5"
import {usePathname} from "next/navigation";

const routes = [
    {
        name: 'Pokémon',
        url: '/category/pokemon',
        icon: '/images/icons/pokeball.png'
    },
    {
        name: 'Magic the Gathering',
        url: '/category/magic-the-gathering',
        icon: '/images/icons/magic.svg'
    },
    {
        name: 'One Piece',
        url: '/category/one-piece',
        icon: '/images/icons/one-piece.webp'
    },
    {
        name: 'Riftbound',
        url: '/category/riftbound',
        icon: '/images/icons/riftbound.svg'
    }]

export const TopMenu = () => {
    const pathname = usePathname();
    return (<nav className="w-full flex px-5 justify-between items-center">
            <div>
                <Link href="/" className="font-mono font-bold">Rapture Board Games | Store </Link>
            </div>
            <div className="hidden md:block">
                {routes.map((route, index) => {
                    return <Link key={index} href={route.url}
                                 className={`${pathname === route.url ? 'm-2 px-3 py-2 font-bold border-b-2 border-primary' : 'm-2 px-3 py-2 rounded-full transition-all hover:bg-primary/30 font-bold'}`}>{route.name}</Link>
                })}
            </div>
            <div className="flex items-center gap-2">
                <Link href="/search">
                    <IoSearchOutline className="size-5"/>
                </Link>
                <Link href="/cart" className="relative">
                    <IoCartOutline className="size-5"/>
                    <span
                        className="absolute -top-2 -right-2 px-1 rounded-full bg-primary text-xs font-bold font-mono">5</span>
                </Link>
                <button className="m-2 px-3 py-2 rounded-full transition-all hover:bg-primary/30 hover:font-bold">Menu
                </button>
            </div>
        </nav>
    )
}