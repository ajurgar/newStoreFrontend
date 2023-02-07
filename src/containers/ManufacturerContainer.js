import React from "react";
import ManufacturerList from "../components/manufacturer/ManufacturerList";
import ManufacturerForm from "../components/manufacturer/ManufacturerForm";
import { Routes, Route } from "react-router-dom";

const ManufacturerContainer = ({ manufacturers }) => {


    return (
        <div>
            <Routes>
                <Route path="/" element={<ManufacturerList manufacturers={manufacturers} />} />
                <Route path="/new" element={<ManufacturerForm />} />
            </Routes>

        </div>
    )
}

export default ManufacturerContainer;