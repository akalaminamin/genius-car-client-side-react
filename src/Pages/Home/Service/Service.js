import React, { useEffect, useState } from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Service = ({ service }) => {
    const { _id, Name, price, desc, img } = service;
    const [storeService, setStoreService] = useState([])
    useEffect(() => {
        axios.get("https://shielded-mountain-53480.herokuapp.com/services")
            .then(res => {
                setStoreService(res.data)
            })
    }, [])
    const handleDelete = (id) => {
        const confirmMessage = window.confirm("Are you sure delete this service?")
        if (confirmMessage) {
            fetch(`https://shielded-mountain-53480.herokuapp.com/services/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(storeService)
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted successfull");
                        const updateService = storeService.filter(singleService => singleService._id !== Number(id));
                        setStoreService(updateService)
                    }
                })
        }
    }
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{Name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{desc}</p>
            <Link to={`/services/${_id}`}>
                <button className="btn btn-warning">Book {Name.toLowerCase()}</button>
            </Link>
            <button className="btn btn-danger ms-3" onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default Service;