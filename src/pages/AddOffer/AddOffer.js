import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddOffer.css'

const AddOffer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/offers', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('This Offer Successfully Added');
                    reset();
                };
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <div className="add-offer">
            <h1 className="title-text">Add New Offer</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>ADD NEW OFFER FOR TO IMPRESS VISITOR AND GROW YOUR BUSINESS</i></p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Offer Name" {...register("name")} />
                <textarea placeholder="Offer Description" {...register("description")} />
                <input placeholder="Offer Price" type="number" {...register("price")} />
                <input placeholder="Pakage Days" type="number" {...register("days")} />
                <input placeholder="Image Link" {...register("img")} />
                <input className="btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddOffer;