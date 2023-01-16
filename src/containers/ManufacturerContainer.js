import React from "react";
import Manufacturer from "../components/manufacturer/Manufacturer";

const ManufacturerContainer = ({manufacturers}) =>{

    const manufacturersNode = manufacturers.map((manufacturer, index) => {
            return <Manufacturer manufacturer={manufacturer} key={index} />
    })

    return(
        <div>
            {manufacturersNode}
        </div>
    )
}

export default ManufacturerContainer;