import React from "react";

const Manufacturer = ({manufacturer}) => {


    return(
        <>
            {manufacturer.id}
            {manufacturer.name}
            {manufacturer.status}
            
        </>
    )
}

export default Manufacturer;