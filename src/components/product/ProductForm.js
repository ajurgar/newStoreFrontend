import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Request from "../../helpers/request";

const ProductForm = ({ products, manufacturers }) => {


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


    const handleSubmit = (event) =>{
        event.preventDefault();
        const request = new Request();
        request.post("/api/products", newProduct)
        .then(() => { window.location = '/products'
        });
    }


    const manufacturerOptions = manufacturers.map((manufacturer, index) => {
        return <option value={index} key={index}>{manufacturer.name}</option>
        
    });

    const handleChange = (event) => {
        const productName = event.target.name;
        const copyOfNewProduct = { ...newProduct };
        copyOfNewProduct[productName] = event.target.value;
        setNewProduct(copyOfNewProduct);
    }

    const handleManufacturerSelection = (event) => {
        const copyOfNewProduct = { ...newProduct };
        copyOfNewProduct.manufacturer = manufacturers[event.target.value];
        setNewProduct(copyOfNewProduct);
    }




    return (!manufacturers) ? null : (
        <>
            <h2>Add Product</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label><b>Name</b></label>
                <input type="text" name="name" value={newProduct.name} onChange={handleChange} required />

                <label><b>Model</b></label>
                <input type="text" name="description" value={newProduct.description} onChange={handleChange} required/>

                <label><b>Size</b></label>
                <input type="number" name="size" value={newProduct.size} onChange={handleChange} required/>

                <label><b>Manufacturer</b></label>
                <select name="manufacturer" defaultValue={"select-manufacturer"} onChange={handleManufacturerSelection}>
                    <option disabled value="select-manufacturer">Select Manufacturer</option>
                    {manufacturerOptions}
                </select>

                <label><b>Stock</b></label>
                <input type="number" name="stockQty" value={newProduct.stockQty} onChange={handleChange} required/>

                <label><b>Buy Price</b></label>
                <input type="number" name="buyPrice" value={newProduct.buyPrice} onChange={handleChange} required />

                <label><b>Sell Price</b></label>
                <input type="number" name="sellPrice" value={newProduct.sellPrice} onChange={handleChange} required />

                <button type="submit">Add Product</button>

            </form>

        </>
    )


}

export default ProductForm;