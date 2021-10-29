import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])

    const handleDelete = id => {
        const confirmation = window.confirm('Do you want to delete this offer?');
        if (confirmation) {
            const url = `http://localhost:5000/offers/${id}`;
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
        <div>
            {
                offers.map(offer => <div key={offer._id}>
                    <div className="d-flex">
                        <h3>{offer.name}</h3>
                        <button onClick={() => handleDelete(offer._id)}>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageServices;