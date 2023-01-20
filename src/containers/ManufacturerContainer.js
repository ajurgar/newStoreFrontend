import React from "react";
import Manufacturer from "../components/manufacturer/Manufacturer";

const ManufacturerContainer = ({manufacturers}) =>{

    const manufacturersNode = manufacturers.map((manufacturer, index) => {
            return <Manufacturer manufacturer={manufacturer} key={index} />
    })

    return(
        <div>
              <h2 className="title">Manufacturers</h2>

<table className="styled-table">
    <thead className="">
        <tr className="table-columns">
            <th><b>Manufacturer ID</b></th>
            <th> <b>Name</b> </th>
            <th> <b>Status</b> </th>
            
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {manufacturersNode}
    </tbody>
</table>
        </div>
    )
}

export default ManufacturerContainer;