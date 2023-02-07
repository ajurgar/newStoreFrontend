import React from "react";

const Product = ({product}) => {

    


    return(

        
        
        
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.size}</td>
            <td>{product.manufacturer.name}</td>
            <td>{product.stockQty}</td>
            <td>{product.buyPrice}</td>
            <td>{product.sellPrice}</td>
            <td>{product.sellPrice - product.buyPrice} </td>
            
        </tr>
      
    )
}

export default Product;