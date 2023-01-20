import React, { useEffect, useState } from "react";

const ProductForm = ({products, manufacturers}) => {


    const [newProduct, setNewProduct] = useState(
        {
            name: "",
            description: "",
            size: 0,
            manufacturer: null,
            stockQty: 0,
            buyPrice: 0,
            sellPrice: 0,
        }
    );


    return(
        <>
        <h2>Add Booking</h2>
        <form>
            <label><b>Name</b></label>
            <input></input>

            <label><b>Model</b></label>
            <input></input>

            <label><b>Size</b></label>
            <input></input>

            <label><b>Manufacturer</b></label>
            <input></input>

            <label><b>Stock</b></label>
            <input></input>

            <label><b>Buy Price</b></label>
            <input></input>

            <label><b>Sell Price</b></label>
            <input></input>

        </form>

        </>
    )


}

export default ProductForm;