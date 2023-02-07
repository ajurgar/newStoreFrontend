import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../components/product/ProductList";
import ProductForm from "../components/product/ProductForm";

const ProductContainer = ({ products, manufacturers }) => {


    return (
        <Routes>
            <Route path="/new" element={<ProductForm products={products} manufacturers={manufacturers} />} />
            <Route path="/" element={<ProductList products={products} manufacturers={manufacturers} />} />
        </Routes>
    )
}

export default ProductContainer;