import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import { Accordion, Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this import for bootstrap CSS

export default function Newbie() {
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
                        <Nav.Link href="/meals">Food and Nutrition</Nav.Link>
                        <Nav.Link href="#goals">Daily Goals</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#register">Register</Nav.Link>
                        <Nav.Link href="#login">Log In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            
                <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Introduction
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Regular exercise offers numerous physical and mental health benefits, including improved cardiovascular health, increased muscle strength, better mood, and reduced risk of chronic diseases. New gym-goers should approach their fitness journey with a positive mindset and set realistic, achievable goals. Remember that progress takes time and consistency, and it's essential to focus on personal growth rather than comparing yourself to others.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Gym Etiquette
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Practicing proper gym etiquette ensures a positive and welcoming environment for everyone. Always wipe down equipment after use to maintain cleanliness and prevent the spread of germs. Be respectful of others' space and avoid occupying equipment for extended periods. Follow gym rules and guidelines, and be courteous to staff and other gym-goers. Dress appropriately by wearing comfortable workout clothes and proper athletic shoes, and bring essentials like a towel, water bottle, and gym bag.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        Basic Anatomy and Muscle Groups
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Understanding the major muscle groups and their functions is essential for designing effective workouts. Key muscle groups include the chest, back, shoulders, arms, legs, and core. Compound exercises, such as squats and bench presses, work multiple muscle groups simultaneously, while isolation exercises, like bicep curls, target specific muscles. Aim for a balanced workout routine that engages all muscle groups.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        Types of Workouts
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Resistance training strengthens muscles through activities like weightlifting or bodyweight exercises. Cardiovascular workouts, such as running or cycling, improve heart health and endurance. Flexibility exercises, like yoga or stretching, enhance mobility and reduce the risk of injury. Incorporate a mix of these workouts into your fitness routine for well-rounded results.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        Beginner Workout Programs
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Start with a full-body workout routine that focuses on basic compound exercises, such as squats, deadlifts, bench presses, rows, and shoulder presses. Begin with two to three sets of 8-12 repetitions per exercise, and gradually increase weight and intensity over time. Aim for three workout sessions per week, with at least one rest day between sessions.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        Proper Form and Technique
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Correct form and technique are crucial for preventing injuries and maximizing workout results. Consult reputable resources, such as instructional videos or articles, to learn proper form for each exercise. Consider working with a personal trainer or knowledgeable gym buddy to receive personalized guidance. Gradually increase weight and intensity as you become more comfortable with each exercise.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        Nutrition and Hydration
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Proper nutrition fuels your workouts and supports muscle recovery and growth. Focus on a balanced diet rich in lean proteins, complex carbohydrates, healthy fats, and plenty of fruits and vegetables. Stay hydrated by drinking water throughout the day and during workouts. Adjust your caloric intake based on your activity level and fitness goals.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                        Tracking Progress and Setting Goals
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Set SMART goals to stay motivated and focused on your fitness journey. Track your progress using workout logs, fitness apps, or journals to monitor improvements in strength, endurance, and flexibility. Celebrate milestones and achievements, and use setbacks as learning opportunities to refine your approach.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                        Types of Workouts
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Resistance training strengthens muscles through activities like weightlifting or bodyweight exercises. Cardiovascular workouts, such as running or cycling, improve heart health and endurance. Flexibility exercises, like yoga or stretching, enhance mobility and reduce the risk of injury. Incorporate a mix of these workouts into your fitness routine for well-rounded results.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>
                        Frequently Asked Questions (FAQs)
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>- How can I overcome gym anxiety? Start by visiting the gym during off-peak hours, familiarizing yourself with the equipment, and creating a workout plan before arriving.</p>
                        <p>- What if I hit a workout plateau? Mix up your routine, increase intensity, or try new exercises to challenge your body and break through plateaus.</p>
                        <p>- How do I manage muscle soreness? Prioritize proper warm-ups, cool-downs, and stretching. Use foam rollers or massage tools to alleviate soreness, and consider taking rest days or engaging in light activity to promote recovery.</p>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            
        </div>
    )
};