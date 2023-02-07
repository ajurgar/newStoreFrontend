import React, { useEffect, useState } from "react";
import ProductContainer from "./ProductContainer";
import ManufacturerContainer from "./ManufacturerContainer";
import Request from "../helpers/request";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar";
import ErrorPage from "./ErrorPage";


const MainContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getManufacturersWithIdAndProducts();
    }, [])

    const [manufacturers, setManufacturers] = useState([]);

    const getManufacturersWithIdAndProducts = () =>{
        const request = new Request();
        request.get('/api/products')
        .then (data => setProducts(data));
   
        request.get('/api/manufacturers')
        .then (data => setManufacturers(data));
    }


    const deleteProduct = (id) =>{
        const copyOfProducts = [...products]
        let indexToDelete;
        copyOfProducts.forEach((product, index) => {
            if(product.id == id) {
                indexToDelete = index
            }
        })
        copyOfProducts.splice(indexToDelete, 1);
        setProducts(copyOfProducts);
    }



    return ( !products || !manufacturers) ? null : (
        <div>
        <NavBar />
        <Routes>
            <Route path="/home" element={<HomePage products = {products} manufacturers = {manufacturers} />} />
            <Route path="/" element={<HomePage products = {products} manufacturers = {manufacturers} />} />
            <Route path="/products/*" element={<ProductContainer products = {products} deleteProduct = {deleteProduct} manufacturers = {manufacturers}/>} />
            <Route path="/manufacturers/*" element={<ManufacturerContainer manufacturers = {manufacturers}/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
       
           
        </div>
    )
}

export default MainContainer;