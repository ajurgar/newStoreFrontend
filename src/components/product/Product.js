import React from "react";

const Product = ({product}) => {


    return(
        <>
            {product.id}
            {product.name}
            {product.description}
        </>
    )
}

export default Product;