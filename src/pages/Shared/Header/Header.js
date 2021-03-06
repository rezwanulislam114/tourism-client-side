import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth()
    const [carts, setCarts] = useState(null);
    const email = user.email;
    const activeStyle = {
        borderBottom: '3px solid white',
        color: 'white'
    }
    useEffect(() => {
        fetch(`https://dry-fjord-96856.herokuapp.com/cart/${email}`)
            .then(res => res.json())
            .then(async data => {
                setCarts(data)
                console.log(data?.length)
            })
    }, [])

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="header-navbar">
                <Navbar.Brand as={Link} to="/">
                    <h3><span className="text-danger">Yo!</span>Getaway.</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home" activeStyle={activeStyle}>Home</Nav.Link>
                        {
                            user?.email ?
                                <>
                                    <Nav.Link as={NavLink} to="/add-offer" activeStyle={activeStyle}>Add Offer</Nav.Link>
                                    <Nav.Link as={NavLink} to="/manage-services" activeStyle={activeStyle}>Manage Offers</Nav.Link>
                                    <Nav.Link as={NavLink} to="/cart" activeStyle={activeStyle}>Cart {carts?.length}</Nav.Link>
                                </> :
                                ''
                        }
                    </Nav>
                    <Nav>
                        {
                            user?.email ?
                                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                                    <p className="text-light m-0 me-3">{user.displayName}</p>
                                    <button className="btn btn-danger" onClick={() => logout()}>Logout</button>
                                </div> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;