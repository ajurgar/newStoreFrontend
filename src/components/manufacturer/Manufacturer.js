import React from "react";

const Manufacturer = ({ manufacturer }) => {


    return (
        <>
            <tr>
                <td>{manufacturer.id}</td>
                <td>{manufacturer.name}</td>
                <td>{manufacturer.status ? "Active" : "Not Active"}</td>
            </tr>


        </>
    )
}

export default Manufacturer;