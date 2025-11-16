import {Product} from "@/interfaces";
import {ProductGridItem} from "@/components";

interface Props {
    products: Product[]
}

export const ProductGrid = ({products}: Props) => {
    return (<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => {
                return <ProductGridItem key={index} product={product}/>
            })}
        </div>
    );
};

export default ProductGrid;