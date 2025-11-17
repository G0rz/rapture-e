'use client'
import Image from "next/image";
import {Product} from "@/interfaces";
import Link from "next/link";

interface Props{
    product: Product
}

export const ProductGridItem = ({product}: Props) => {

    return (
        <div className="relative rounded-lg overflow-hidden fade-in hover:scale-125 hover:z-10 text-sm md:text-md">
            <Link href={`/product/${product.slug}`}>
            <Image width={500} height={500} loading="eager"
                   src={`https://api.scryfall.com/cards/${product.image}/?format=image`} alt={`${product.name}`}
                   className="w-full object-cover"/>
                <div
                    className="absolute bottom-0 backdrop-blur-md bg-black/20 w-full px-2 py-1 flex flex-col text-foreground text-shadow-lg">
                    <Link href={`/product/${product.slug}`}>
                        <span className="font-bold hover:text-blue-600"> {product.name} ({product.foil}) </span>
                    </Link>
                    <span className="">${product?.price === null ? "N/A" : product?.price}</span>
                    <span className="">In Stock: {product?.quantity} ({product.condition === "near_mint" ? "NM" : product.condition})</span>
                </div>
            </Link>
        </div>
    )
}