import {Product} from "@/interfaces";

interface Props {
    products: Product[]
}

export const ProductGrid = ({products}: Props) => {
    return (<div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {products.map((product, index) => {
                return <span key={index}>
                    {product.name}
                </span>
            })}
        </div>
    );
};

export default ProductGrid;