import {ProductGrid, Title} from "@/components";
import {initialData} from "@/store/test-seed";

const products = initialData.products;

export default function Shop() {
    return (
        <>
            <Title title={"Home"} subtitle={""}/>
            <ProductGrid products={products}/>
        </>
    );
}
