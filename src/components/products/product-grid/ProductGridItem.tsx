'use client'
import Image from "next/image";
import {Product} from "@/interfaces";
import Link from "next/link";

interface Props{
    product: Product
}

export const ProductGridItem = ({product}: Props) => {

    return (
        <div className="relative rounded-md shadow-2xl overflow-hidden fade-in hover:scale-125 hover:z-10">
            <Link href={`/product/${product.slug}`}>
            <Image width={500} height={500} loading="eager"
                   src={`https://api.scryfall.com/cards/${product.image}/?format=image`} alt={`${product.name}`}
                   className="w-full object-cover"/>
                <div
                    className="absolute bottom-0 w-full px-2 py-1 flex flex-col text-foreground backdrop-blur-md bg-black/20 text-xs">
                    <Link href={`/product/${product.slug}`}>
                        <span className=" hover:text-primary"> {product.name} ({product.foil}) </span>
                    </Link>
                    <span className="font-bold">${product?.price}</span>
                    <span className="font-bold">In Stock: {product?.quantity}</span>
                </div>
            </Link>
        </div>
    )
}