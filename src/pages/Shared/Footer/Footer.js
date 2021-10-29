import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className="bg-dark text-white pt-5 pb-3 mt-5">
            <Container>
                <Row>
                    <Col xs={12} md={3} className=" pe-5">
                        <h2 className="mb-4"><span className="text-danger">Yo!</span>Getaway</h2>
                        <p>This is a website that privide you to go any where in the world in a reasonable cost. We also think about you safety. Everyone is safe with us. You are most welcome here. Enjoy your trip.</p>
                    </Col>
                    <Col xs={12} md={3} className=" px-5">
                        <h4 className="text-secondary mb-4">Quick Link</h4>
                        <div className="quick-link">
                            <Link to="/">Home</Link>
                            <Link to="/">About</Link>
                            <Link to="/">New Offers</Link>
                            <Link to="/">Services</Link>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className=" px-5">
                        <h4 className="text-secondary mb-4">Features</h4>
                        <div className="quick-link">
                            <Link to="/">News</Link>
                            <Link to="/">New Blogs</Link>
                            <Link to="/">Gallary</Link>
                            <Link to="/">Privacy Policy</Link>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="newsletter ps-5">
                        <h4 className="text-secondary mb-4">Newsletter</h4>
                        <input type="text" />
                        <button className="btn btn-danger">Subscribe</button>
                    </Col>
                </Row>
                <p className="text-center text-secondary m-0 mt-4">copyright @Yo!Getaway 2021</p>
            </Container>
        </Container>
    );
};

export default Footer;