import React, { useState } from "react";
import Request from "../../helpers/request";

const ManufacturerForm = ({ manufacturers }) => {

    const [newManufacturer, setNewManufacturer] = useState({
        name: "",
        status: null,
    });

    const handleChange = (e) =>{
        const newFormData = Object.assign({}, newManufacturer);
        newFormData[e.target.name] = e.target.value;
        setNewManufacturer(newFormData);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const request = new Request();
        request.post("/api/manufacturers", newManufacturer)
        .then(()=> window.location = '/manufacturers')
    }





    return (

        <form onSubmit={handleSubmit}>

            <label><b>Name</b></label>
            <input type="text" name="name" value={newManufacturer.name} onChange={handleChange} />

            <label>Status</label>
            <select name="status" onChange={handleChange}>
                <option name="status">Select Status </option>
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>

                
            </select>


            <button onSubmit="submit">Add Manufacturer</button>


        </form>

    )
}


export default ManufacturerForm;