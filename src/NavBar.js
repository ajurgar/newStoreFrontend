import React from "react";


const NavBar = () =>{

    return (
        <>
        <nav id="main-navbar">
            <h1 className="app-text">Ajsneakrs App</h1>
            <ul className="ul-navbar">
                <li>
                <a href="/home" className="nav-text">Home</a>
                </li>
                <li>
                <a href="/products" className="nav-text">Inventory</a>
                </li>
                <li>
                <a href="/manufacturers" className="nav-text">Manufacturers</a>
                </li>
                <li>
                <a href="/products/new" className="nav-text">New Product</a>
                </li>
                <li>
                <a href="/manufacturers/new" className="nav-text">New Manufacturer</a>
                </li>
            </ul>
        </nav>
    </>
    )
}


export default NavBar;