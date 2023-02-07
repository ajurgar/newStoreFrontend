import React from "react";
import Request from "../../helpers/request";

const Product = ({product, deleteProduct}) => {


    

    const handleDelete = () =>{
        const request = new Request();
        request.delete('/api/products', product.id);
        deleteProduct(product.id);
    }

    


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
            <td><button onClick={handleDelete}>Delete</button></td>
            
            
            
            
        </tr>
      
    )
}

export default Product;