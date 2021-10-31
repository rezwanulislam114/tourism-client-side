import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Cart = () => {
    const [carts, setCarts] = useState([]);
    const { user } = useAuth();
    // const email = user.email;
    // const { id } = useParams();

    useEffect(() => {
        fetch(`https://dry-fjord-96856.herokuapp.com/cart`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    // const handleRemove = (id) => {
    //     fetch(`https://localhost:5000/cart/${email}/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }

    const handleRemove = id => {
        // const confirmation = window.confirm('Do you want to delete this offer?');
        // if (confirmation) {
        const url = `https://dry-fjord-96856.herokuapp.com/cart/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                // if (data.deletedCount > 0) {
                //     alert('Your offer deleted successfully.')
                //     const remaining = carts.filter(offer => offer._id !== id)
                //     setCarts(remaining)
                // }
                console.log(data)
            })
        // }
    }

    return (
        <Container>
            <div className="offers-manage">
                <h1 className="title-text">That You Booked</h1>
                <p className="text-center text-danger mt-3 mb-5"><i>HERE YOU CAN REMOVE YOUR BOOKED PLACES WHICH YOU DONT WANT TO TAKE</i></p>
                {
                    carts.map(cart => <div key={cart._id}>
                        <div className="d-flex justify-content-between m-3 border-bottom">
                            <h5>{cart.name}</h5>
                            <button onClick={() => handleRemove(cart._id)} className="btn btn-danger mb-2">Remove</button>
                        </div>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default Cart;