import React from "react";
import Product from "../components/product/Product";

const ProductContainer = ({products}) =>{

    const productsNode = products.map((product, index) => {
            return <Product product={product} key={index} />
    })

    return(
        <div>
            {productsNode}
        </div>
    )
}

export default ProductContainer;