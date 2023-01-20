import React from "react";
import Product from "../components/product/Product";


const ProductContainer = ({products}) =>{

    const productsNode = products.map((product, index) => {
            return <Product product={product} key={index} />
    })

    return(
        <div>
           
             <table className="styled-table">
                <thead>
                    <tr className="table-columns">
                        <th><b>Product ID</b></th>
                        <th> <b> Name </b> </th>
                        <th> <b> Model </b> </th>
                        <th> <b> Size </b> </th>
                        <th> <b> Manufacturer </b> </th>
                        <th> <b> Stock </b> </th>
                        <th> <b>Buy Price</b> </th>
                        <th> <b>Sell Price</b> </th>
                        <th> <b>Markup</b> </th>
                        
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {productsNode}
                </tbody>
            </table>

        </div>
    )
}

export default ProductContainer;