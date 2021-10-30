import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './SingleService.css'

const SingleService = () => {
    const { id } = useParams()
    const [offer, setOffer] = useState({});
    useEffect(() => {
        const url = `https://dry-fjord-96856.herokuapp.com/offers/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOffer(data));
    }, [])
    return (
        <Container>
            <h1 className="title-text">Details About {offer.name}</h1>
            <p className="text-center text-danger mt-3 mb-5">HERE YOU CAN KNOW ALL ABOUT {offer.name}. YOU CAN ALSO BOOK OFFERS</p>
            <Row>
                <Col xs={12} md={7}>
                    <h2>{offer.name}</h2>
                    <p>{offer.description}</p>
                    <h5 className="text-secondary">{offer.days} Days</h5>
                    <h3 className="text-danger">$ {offer.price}</h3>
                    <button className="btn btn-danger">Book Now</button>
                </Col>
                <Col xs={12} md={5}>
                    <img className="offer-detail-img" src={offer.img} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default SingleService;