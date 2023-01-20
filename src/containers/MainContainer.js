import React, { useEffect, useState } from "react";
import ProductContainer from "./ProductContainer";
import ManufacturerContainer from "./ManufacturerContainer";
import Request from "../helpers/request";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar";
import ErrorPage from "./ErrorPage";
import ProductForm from "../components/product/ProductForm";

const MainContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getManufacturersWithIdAndBookings();
    }, [])

    const [manufacturers, setManufacturers] = useState([]);

    const getManufacturersWithIdAndBookings = () =>{
        const request = new Request();
        request.get('http://localhost:8080/api/products')
        .then (data => setProducts(data));
   
        request.get('http://localhost:8080/api/manufacturers')
        .then (data => setManufacturers(data));
    }



    return (
        <div>
        <NavBar />
        <Routes>
            <Route path="/home" element={<HomePage products = {products} manufacturers = {manufacturers} updateCustomersAndBookings = {getManufacturersWithIdAndBookings}/>} />
            <Route path="/" element={<HomePage products = {products} manufacturers = {manufacturers} updateCustomersAndBookings = {getManufacturersWithIdAndBookings}/>} />
            <Route path="/products" element={<ProductContainer products = {products} manufacturers = {manufacturers}/>} />
            <Route path="/manufacturers" element={<ManufacturerContainer manufacturers = {manufacturers}/>} />
            <Route path="/products/new" element={<ProductForm products = {products} manufacturers = {manufacturers}/>} />
            <Route path="/manufacturers/new" element={<ProductForm products = {products} manufacturers = {manufacturers}/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
      
           
        </div>
    )
}

export default MainContainer;