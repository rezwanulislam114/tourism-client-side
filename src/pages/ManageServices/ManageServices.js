import React, { useEffect, useState } from 'react';
import './ManageServices.css'

const ManageServices = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('https://dry-fjord-96856.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])

    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to delete this offer?');
        if (confirmation) {
            const url = `https://dry-fjord-96856.herokuapp.com/offers/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Your offer deleted successfully.')
                        const remaining = offers.filter(offer => offer._id !== id)
                        setOffers(remaining)
                    }
                })
        }
    }

    return (
        <div className="offers-manage">
            <h1 className="title-text">Manage Offers</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>HERE YOU CAN DELETE YOUR OFFER WHICH IS NOT AVAILABLE RIGHT NOW</i></p>
            {
                offers.map(offer => <div key={offer._id}>
                    <div className="d-flex justify-content-between m-3 border-bottom">
                        <h5>{offer.name}</h5>
                        <button className="btn btn-danger mb-2" onClick={() => handleDelete(offer._id)}>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageServices;