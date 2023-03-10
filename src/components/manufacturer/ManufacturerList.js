import React from "react";
import Manufacturer from "./Manufacturer";

const ManufacturerList = ({manufacturers}) =>{

    const manufacturersNode = manufacturers.map((manufacturer, index) => {
            return <Manufacturer manufacturer={manufacturer} key={index} />
    })

    return(
        <div>
              

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

export default ManufacturerList;