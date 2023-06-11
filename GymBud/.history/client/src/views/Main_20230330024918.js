import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const images = [
{
    id: 1, 
    src: 'https://chefirvine.com/wp-content/uploads/2019/11/DL-2-WEB-e1573073017672.png',
    alt: 'Image 1',
    style: { width: 1800, height: 1200 },
},
{
    id: 2,
    src: 'https://i.dailymail.co.uk/1s/2023/02/27/18/68138223-0-image-a-41_1677522704692.jpg',
    alt: 'Image 2',
    style: { width: 1000, height: 1200 },
},
{
    id: 3,
    src: 'https://as1.ftcdn.net/v2/jpg/00/73/88/38/1000_F_73883887_zBVPRl2CXyOtllta90yiVAH2h21wQqeF.jpg',
    alt: 'Image 3',
    style: { width: 1800, height: 1200 },
},
];

export default () => {
const [currentImage, setCurrentImage] = useState(images[0]);

const handleImageChange = (index) => {
setCurrentImage(images[index]);
};

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // set the time between slides in milliseconds
};

    return (
                <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">GymBud</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/beginners">Beginner? Start here!</Nav.Link>
                        <Nav.Link href="/macros">Macro Calculator</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Different types of SPLITS</NavDropdown.Item>
                        <NavDropdown.Item href="/planner">Workout planner/tracker</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#meals">Food and Nutrition</Nav.Link>
                        <Nav.Link href="#goals">Daily Goals</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#register">Register</Nav.Link>
                        <Nav.Link href="#login">Log In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <div style={{textAlign: "center", backgroundColor: "black"}}>
                <Slider {...settings}>
                    {images.map(image => (
                        <div key={image.id}>
                            <img src={image.src} alt={image.alt} style={{ ...image.style, margin: "0 auto" }} />
                        </div>
                    ))}
                </Slider>
                </div>
        </div>
    )
};