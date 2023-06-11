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
                        <p>Welcome to our gym app! Starting your fitness journey can be both exciting and challenging. In this section, we will provide an overview of the benefits of regular exercise, the importance of setting realistic goals, and tips on maintaining a positive mindset. We'll also discuss how to stay consistent and focused on personal growth throughout your journey. Get ready to transform your body and mind!</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Gym Etiquette
                    </Accordion.Header>
                    <Accordion.Body>
                    <h1>Gym Etiquette</h1>
                    <p>Starting your fitness journey at a gym can be an exciting and sometimes intimidating experience. To make sure you and others around you have a positive and enjoyable time at the gym, it's essential to understand and practice proper gym etiquette. This guide will provide you with a comprehensive understanding of the do's and don'ts at the gym, ensuring a comfortable and respectful environment for everyone.</p>
                    <ol>
                    <li>Respect personal space</li>
                    <p>Gyms can get crowded, especially during peak hours. Always be mindful of other people's personal space while working out. Avoid getting too close to someone while they're lifting weights, using machines, or performing exercises on the floor. Be patient and wait for your turn instead of hovering around or interrupting someone's workout.</p>

                    <li>Wipe down equipment after use</li>
                    <p>Sweat and germs can easily spread at the gym. To maintain cleanliness and prevent the spread of germs, always wipe down equipment after use. Most gyms provide disinfectant wipes or spray bottles with paper towels for this purpose. Ensure you clean all contact points, such as handles, seats, and touchscreens.</p>

                    <li>Return equipment to its designated place</li>
                    <p>After using dumbbells, weight plates, or other portable equipment, return them to their designated storage areas. This makes it easier for others to find and use the equipment and prevents accidents caused by cluttered workout spaces.</p>

                    <li>Avoid excessive noise</li>
                    <p>While it's natural to make some noise during an intense workout, try to keep it to a minimum. Avoid loud grunting, dropping weights, or playing music without headphones. Excessive noise can be distracting and disrespectful to fellow gym-goers.</p>

                    <li>Share equipment and allow others to work in</li>
                    <p>During busy times, you might need to share equipment with others. If someone asks to work in with you (alternate sets on a machine or bench), be courteous and accommodate their request. This promotes a friendly atmosphere and helps everyone complete their workouts more efficiently.</p>

                    <li>Limit your time on machines and equipment</li>
                    <p>Be mindful of the time you spend on a particular machine or piece of equipment, especially during peak hours. Limit your rest periods and avoid spending excessive time on your phone between sets. If you notice someone waiting for the equipment you're using, wrap up your workout as quickly as possible or offer to let them work in.</p>

                    <li>Dress appropriately</li>
                    <p>Wear clean, comfortable workout clothes and proper athletic shoes to the gym. Avoid excessively revealing or inappropriate attire. Good gym attire not only shows respect for others but also ensures your safety and comfort during exercise.</p>

                    <li>Use proper locker room etiquette</li>
                    <p>In the locker room, be respectful of others' privacy and personal space. Keep your belongings organized and confined to your locker or designated area. Avoid using your phone, especially taking photos or videos, in the locker room to protect people's privacy. Finally, be sure to dispose of your trash and leave the area clean for others.</p>

                    <li>Follow gym rules and guidelines</li>
                    <p>Each gym may have specific rules and guidelines in place, such as age restrictions, guest policies, or time limits on certain equipment. Familiarize yourself with these rules and follow them to ensure a smooth experience for everyone.</p>
                    <li>Be courteous and respectful</li>
                        <p>Treat gym staff and fellow gym-goers with kindness and respect. If someone needs help or asks for advice, be willing to assist or guide them. Building a positive community at the gym contributes to an enjoyable atmosphere for everyone.</p>
                    </ol>
                    <p>Practicing proper gym etiquette not only makes your gym experience more enjoyable but also helps create a supportive and respectful environment for all gym-goers. By following these guidelines, you'll feel more confident and comfortable in your new gym surroundings and be on your way to a successful fitness journey.</p>

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