import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, description, img, price, days } = props.offer;
    return (
        <div className="service">
            <div className="service-img">
                <img src={img} alt="" />
            </div>
            <div className="service-info">
                <div>
                    <h2>{name}</h2>
                    <p>{description.slice(0, 130)}...</p>
                </div>
                <div>
                    <h5>{days} Days</h5>
                    <div className="d-flex align-items-center justify-content-between">
                        <h3 className="text-danger">$ {price}</h3>
                        <button className="btn btn-danger">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;