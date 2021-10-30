import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Services from './Services/Services';
import './Home.css'
import banner1 from '../../images/banner/banner (1).jpg'
import banner2 from '../../images/banner/banner (2).jpg'
import banner3 from '../../images/banner/banner (3).jpg'
import reviewBg from '../../images/review-bg/review-bg.jpg'

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
                        <h1>Iceland</h1>
                        <p>Iceland, a Nordic island nation, is defined by its dramatic landscape</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Maldives</h1>
                        <p>Maldives, officially the Republic of Maldives, is an archipelagic state in the Indian subcontinent of Asia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>St. Martin's</h1>
                        <p>St. Martin's Island is a small island in the northeastern part of the Bay of Bengal</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* offer services section  */}
            <Container>
                <h1 className="title-text">Best Offer</h1>
                <p className="text-danger text-center mt-3 mb-5"><i>CHECK OUT OUR BEST PROMOTION TOURS</i></p>
                <Services></Services>
            </Container>

            {/* about us section  */}
            <Container fluid className="about-us">
                <Container>
                    <h1 className="title-text text-white">Why Choose Us</h1>
                    <p className="text-center text-danger mt-3 mb-5">HERE YOU CAN GET AN IDEA ABOUT US</p>
                    <div className="about-us-container">
                        <div className="single-about">
                            <div className="icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <h3>Handpicked Hotels</h3>
                            <p>Here you can easily book a hotels. You find many hotels and book any one as your wish list. And all hotels are up to mark.</p>
                        </div>
                        <div className="single-about">
                            <div className="icon">
                                <i class="fas fa-globe-americas"></i>
                            </div>
                            <h3>World Class Service</h3>
                            <p>Here you get world class service. You find your most comfort here. You dont need anything to do. Our stuf will do everything for you.</p>
                        </div>
                        <div className="single-about">
                            <div className="icon">
                                <i class="fas fa-thumbs-up"></i>
                            </div>
                            <h3>Best Price Guarantee</h3>
                            <p>We can ensure you that you will get most reasonable cost here. In the city we are only one who provide this world class services in this price range.</p>
                        </div>
                    </div>
                </Container>
            </Container>

            {/* review section  */}
            <Container>
                <h1 className="title-text">What Customers Say</h1>
                <p className="text-danger text-center mt-3 mb-5">TAKE A LOOK WHAT OUR CUSTOMERS SAY ABOUT US</p>
                <div className="reviews">
                    <Carousel variant='dark'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={reviewBg}
                                alt="First slide"
                            />
                            <Carousel.Caption className="text-dark">
                                <p>I take a tour plan from this website and im highly satisfied with this plan. And they also provide many tour pakage. These are also very nice deal. I really liked those. In future if it is possible i will defently go again with these pakages. Its my suggestion for trying this site. Thanks</p>
                                <h4>-Rezwanul Islam</h4>
                                <p className="mt-0">Engineer, MGI</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={reviewBg}
                                alt="First slide"
                            />
                            <Carousel.Caption className="text-dark">
                                <p>I take a packege from this Yo!Getaway. It was amazing. In future if it is possible i will defently go again with these pakages. Its my suggestion for trying this site. Thanks</p>
                                <h4>-Mumtahina Rahman</h4>
                                <p className="mt-0">Engineer, MGI</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={reviewBg}
                                alt="First slide"
                            />
                            <Carousel.Caption className="text-dark">
                                <p>Their are many pakages. These are also very nice deal. I really liked those. In future if it is possible i will defently go again with these pakages. Its my suggestion for trying this site. Thanks</p>
                                <h4>-Rizvi Islam Rahat</h4>
                                <p className="mt-0">CEO, TechIT</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        </div>
    );
};

export default Home;