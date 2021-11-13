import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';
import car from '../../../images/car.jpg'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                   <img  src={car} roundedCircle alt="car"/>
                 
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        {/* <Nav.Link as={Link} to="/home#services">Services</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/home#aboutus">AboutUs</Nav.Link>
                        <Nav.Link as={Link} to="/home#reviews">Reviews</Nav.Link>
                        <Nav.Link as={Link} to="/addService">My orders</Nav.Link>
                        <Nav.Link as={Link} to="/manageService">Manage Orders</Nav.Link> */}
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/explores">Explore</Nav.Link>
                        <Nav.Link as={Link} to="/addModel">Add-Model</Nav.Link>

                       
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text className="mx-2">
                            Signed : <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;