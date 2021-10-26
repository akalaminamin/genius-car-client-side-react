import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([])
    useEffect(()=>{
        axios.get(`https://shielded-mountain-53480.herokuapp.com/services/${serviceId}`)
            .then(res => {
                setServices(res.data)
            })
    }, [])
    const {Name,  desc,  price, img} = services;
    return (
        <div>
            <img src={img} alt="services img" />
            <h2>{Name}</h2>
            <h4>{price}</h4>
            <p>{desc}</p>
        </div>
    );
};

export default Booking;