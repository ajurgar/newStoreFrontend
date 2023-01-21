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
        getManufacturersWithIdAndBookings();
    }, [])

    const [manufacturers, setManufacturers] = useState([]);

    const getManufacturersWithIdAndBookings = () =>{
        const request = new Request();
        request.get('/api/products')
        .then (data => setProducts(data));
   
        request.get('/api/manufacturers')
        .then (data => setManufacturers(data));
    }



    return ( !products || !manufacturers) ? null : (
        <div>
        <NavBar />
        <Routes>
            <Route path="/home" element={<HomePage products = {products} manufacturers = {manufacturers} updateCustomersAndBookings = {getManufacturersWithIdAndBookings}/>} />
            <Route path="/" element={<HomePage products = {products} manufacturers = {manufacturers} updateCustomersAndBookings = {getManufacturersWithIdAndBookings}/>} />
            <Route path="/products/*" element={<ProductContainer products = {products} manufacturers = {manufacturers}/>} />
            <Route path="/manufacturers/*" element={<ManufacturerContainer manufacturers = {manufacturers}/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
      
           
        </div>
    )
}

export default MainContainer;