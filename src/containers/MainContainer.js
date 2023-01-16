import React, { useEffect, useState } from "react";
import ProductContainer from "./ProductContainer";
import ManufacturerContainer from "./ManufacturerContainer";
import Request from "../helpers/request";

const MainContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsWithIdAndManufacturers();
    }, [])

    const [manufacturers, setManufacturers] = useState([]);

    const getProductsWithIdAndManufacturers = () =>{
        const request = new Request();
        request.get('http://localhost:8080/api/products')
        .then (data => {
            console.log(data)
            setProducts(data)});
        

        // request.get('api/manufacturers')
        // .then(fetchedManufacturers => {
        //     const arrayOfManufacturerProductCountsPromises = fetchedManufacturers.map(manufacturer => {
        //         return getProductCountById(manufacturer.id);
        //     });

        //     Promise.all(arrayOfManufacturerProductCountsPromises)
        //     .then(fulfilledPromides => {

        //         const updatedManufacturers = fetchedManufacturers.map((manufacturer, index) => {
        //             manufacturer.productCount = fulfilledPromides[index];
        //             return manufacturer;
        //         })
        //         updatedManufacturers.sort((a, b) => b.productCount - a.productCount);
        //         setManufacturers(updatedManufacturers);
        //     }); 
        // });
    }

    // const getProductCountById = (id) => {
    //     return fetch('api/products/' + id + '/productcount'
    //             .then(response => response.json()));
    // }

    return (
        <div>
        <ProductContainer products = {products}/>
        <ManufacturerContainer manufacturers = {manufacturers}/>
           
        </div>
    )
}

export default MainContainer;