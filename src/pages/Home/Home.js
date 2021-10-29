import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Services from './Services/Services';
import './Home.css'
import banner1 from '../../images/banner/banner (1).jpg'
import banner2 from '../../images/banner/banner (2).jpg'
import banner3 from '../../images/banner/banner (3).jpg'

const Home = () => {
    return (
        <div>
            {/* banner section  */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* offer services section  */}
            <Container>
                <h1 className="title-text">Best Offer</h1>
                <p className="text-danger text-center mt-3 mb-5"><i>CHECK OUT OUR BEST PROMOTION TOURS</i></p>
                <Services></Services>
            </Container>
        </div>
    );
};

export default Home;