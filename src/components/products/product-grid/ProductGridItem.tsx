'use client'
import Image from "next/image";
import {Product} from "@/interfaces";
import Link from "next/link";

interface Props{
    product: Product
}

export const ProductGridItem = ({product}: Props) => {

    // const [displayImage, setDisplayImage] = useState(product.image[0])

    return (
        <div className="relative rounded-lg overflow-hidden fade-in hover:scale-125 hover:z-10 text-sm md:text-md">
            <Link href={`/product/${product.slug}`}>
            <Image width={500} height={500} loading="eager"
                   src={`https://api.scryfall.com/cards/${product.image}/?format=image`} alt={`${product.name}`}
                   className="w-full object-cover"
            // onMouseEnter={() => setDisplayImage(product.image[1])}
            // onMouseLeave={() => setDisplayImage(product.image[0])}
            />
                <div
                    className="absolute bottom-0 backdrop-blur-md bg-black/40 w-full px-2 py-1 flex flex-col text-foreground font-bold">
                    <Link href={`/product/${product.slug}`}>
                        <span className="hover:text-primary"> {product.name}  </span>
                    </Link>
                    <span
                        className={product.foil === 'foil' ? "first-letter:capitalize bg-primary w-fit px-2 rounded-full" : "first-letter:capitalize"}>{product.foil}</span>
                    <span className="">In Stock: {product?.quantity} ({product.condition === "near_mint" ? "NM" : product.condition})</span>
                </div>
            </Link>
        </div>
    )
}