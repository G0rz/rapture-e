'use client'
import Image from "next/image";
import {Product} from "@/interfaces";

interface Props{
    product: Product
}

export const ProductGridItem = ({product}: Props) => {

    return (
        <div className="rounded-md shadow-2xl overflow-hidden fade-in">
            <Image width={500} height={500} loading="eager"
                   src={`https://api.scryfall.com/cards/${product.image}/?format=image`} alt={product.name} className="w-full object-cover"/>
        </div>
    )
}