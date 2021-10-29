import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('https://dry-fjord-96856.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])


    return (
        <div className="services-container">
            {
                offers.map(offer => <Service key={offer._id} offer={offer}></Service>)
            }
        </div>
    );
};

export default Services;