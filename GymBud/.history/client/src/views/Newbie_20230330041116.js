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
                    <h1>Basic Anatomy and Muscle Groups for New Gym Goers</h1>
                    <p>Understanding the basic anatomy and muscle groups is essential for designing effective workouts for new gym goers. Here's an overview of the major muscle groups, their functions, and some common exercises that target each group.</p>
                    <ol>
                        <li>
                        <h2>Chest</h2>
                        <p>The chest muscles, primarily the pectoralis major and pectoralis minor, play a crucial role in pushing movements and stabilizing the shoulder joint. Common exercises for the chest include:</p>
                        <ul>
                        <li>Bench press (flat, incline, decline)</li>
                        <li>Push-ups</li>
                        <li>Chest fly</li>
                        <li>Cable crossover</li>
                        </ul>
                        </li>
                        <li>
                        <h2>Back</h2>
                        <p>The back muscles consist of several groups, including the latissimus dorsi, trapezius, rhomboids, and erector spinae. These muscles contribute to pulling movements, posture, and overall back strength. Common exercises for the back include:</p>
                        <ul>
                        <li>Pull-ups</li>
                        <li>Rows (bent-over, seated, single-arm)</li>
                        <li>Lat pull-downs</li>
                        <li>Deadlifts</li>
                        </ul>
                        </li>
                        <li>
                        <h2>Shoulders</h2>
                        <p>The shoulders are composed of the deltoid muscles, which have three heads: anterior, lateral, and posterior. These muscles assist in various arm and shoulder movements, such as lifting and rotating. Common exercises for the shoulders include:</p>
                        <ul>
                        <li>Shoulder press</li>
                        <li>Lateral raises</li>
                        <li>Front raises</li>
                        <li>Reverse fly</li>
                        </ul>
                        </li>
                        <li>
                        <h2>Arms</h2>
                        <p>The primary muscles in the arms are the biceps and triceps. The biceps are responsible for flexing the elbow, while the triceps extend the elbow. Common exercises for the arms include:</p>
                        <ul>
                        <li>Bicep curls (dumbbell, barbell, hammer)</li>
                        <li>Tricep dips</li>
                        <li>Tricep pushdowns</li>
                        <li>Close-grip bench press</li>
                        </ul>
                        </li>
                        <li>
                        <h2>Legs</h2>
                        <p>The leg muscles include the quadriceps, hamstrings, glutes, and calves. These muscles support lower body movements, such as walking, running, and jumping. Common exercises for the legs include:</p>
                        <ul>
                        <li>Squats</li>
                        <li>Leg press</li>
                        <li>Deadlifts</li>
                        <li>Lunges</li>
                        <li>Leg curls</li>
                        <li>Leg extensions</li>
                        <li>Standing calf raises</li>
                        <li>Seated calf raises</li>
                        </ul>
                        </li>
                        <li>
                        <h2>Core</h2>
                        <p>The core muscles include the rectus abdominis, obliques, and transverse abdominis. These muscles provide stability, support, and control of the torso during various movements. Common exercises for the core include:</p>
                        <ul>
                        <li>Planks</li>
                        <li>Crunches</li>
                        <li>Leg raises</li>
                        <li>Russian twists</li>
                        <li>Side planks</li>
                        </ul>
                        </li>
                        <li>
                        <h2>Compound Exercises</h2>
                        <p>Compound exercises work multiple muscle groups simultaneously, making them an efficient way to train several muscles at once. These exercises are particularly beneficial for beginners as they help develop overall strength and coordination. Examples of compound exercises include:</p>
                        <ul>
                        <li>Squats</li>
                        <li>Deadlifts</li>
                        <li>Bench presses</li>
                        <li>Rows</li>
                        <li>Shoulder presses</li>
                        </ul>
                        </li>
                        <li>
                        <h2>Isolation Exercises</h2>
                        <p>Isolation exercises target specific muscles, allowing you to focus on individual muscle groups. These exercises can be useful for addressing muscle imbalances, improving weak areas, or adding variety to your workout routine. Examples of isolation exercises include:</p>
                        <ul>
                        <li>Bicep curls</li>
                        <li>Tricep extensions</li>
                        <li>Leg curls</li>
                        <li>Leg extensions</li>
                        <li>Side lateral raises</li>
                        </ul>
                        </li>
                        <li>
                        <h2>Stretching and Mobility</h2>
                        <p>Stretching and mobility exercises help maintain and improve flexibility, which is essential for preventing injuries and ensuring proper form during workouts. Regularly incorporating stretching and mobility exercises into your routine can also aid in muscle recovery and overall performance. Examples include:</p>
                        <ul>
                        <li>Dynamic stretches (e.g., leg swings, arm circles)</li>
                        <li>Static stretches (e.g., hamstring stretch, quad stretch)</li>
                        <li>Foam rolling</li>
                        <li>Yoga</li>
                        </ul>
                        </li>
                        <li>
                        <h2>Rest and Recovery</h2>
                        <p>Allowing your muscles adequate time to recover is crucial for preventing injury and promoting growth. Ensure that you schedule rest days in your workout routine, especially when targeting the same muscle groups. Recovery techniques include:</p>
                        <ul>
                        <li>Active recovery (e.g., light cardio, stretching)</li>
                        <li>Restorative yoga</li>
                        <li>Massage</li>
                        <li>Ice baths</li>
                        <li>Compression garments</li>
                        </ul>
                        </li>
                        <li>
                        <h2>Progression and Consistency</h2>
                        <p>To continue making progress and seeing results, it's essential to regularly challenge your muscles by gradually increasing the intensity of your workouts. This can be done through progressive overload, which involves adding weight, increasing repetitions or sets, or altering your workout routine. Stay consistent with your workouts and maintain a balanced approach that targets all major muscle groups.</p>
                        </li>
                    </ol>
                    <p>By familiarizing yourself with basic anatomy and muscle groups, you can create effective workout routines and better understand how different exercises contribute to your overall fitness goals. Remember to prioritize proper form and technique, and always listen to your body to prevent injuries and ensure safe, consistent progress.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        Types of Workouts
                    </Accordion.Header>
                    <Accordion.Body>
                    <h1>Types of Workouts for New Gym-Goers</h1>
<p>When starting your fitness journey, it's essential to understand the different types of workouts available to help you achieve your goals. In this guide, we will explore ten popular workout types to help new gym-goers build a well-rounded fitness routine.</p>
<ol>
  <li>
    <h2>Resistance Training</h2>
    <p>Resistance training involves using external resistance, such as weights or your body weight, to challenge your muscles. This type of workout helps build muscle strength, increase bone density, and improve overall fitness. Examples of resistance training exercises include squats, lunges, push-ups, and bicep curls.</p>
  </li>
  <li>
    <h2>Cardiovascular Training</h2>
    <p>Cardiovascular training focuses on improving heart and lung health by increasing your heart rate through continuous, rhythmic activities. This type of workout helps burn calories, improve endurance, and reduce the risk of heart disease. Examples of cardiovascular exercises include running, cycling, swimming, and jump rope.</p>
  </li>
  <li>
    <h2>High-Intensity Interval Training (HIIT)</h2>
    <p>HIIT involves short bursts of intense exercise followed by brief recovery periods. This workout type is an efficient way to improve cardiovascular fitness, burn calories, and build muscle. Examples of HIIT workouts include alternating sprints with walking or performing bodyweight exercises in timed intervals.</p>
  </li>
  <li>
    <h2>Functional Training</h2>
    <p>Functional training focuses on exercises that mimic everyday movements, enhancing your ability to perform daily tasks and prevent injury. This type of workout helps improve balance, coordination, and overall body strength. Examples of functional training exercises include kettlebell swings, box jumps, and farmer's walks.</p>
  </li>
  <li>
    <h2>Flexibility and Mobility Training</h2>
    <p>Flexibility and mobility training involves stretching and moving your joints through their full range of motion. This type of workout helps reduce muscle tightness, prevent injury, and improve overall performance. Examples of flexibility and mobility exercises include yoga, Pilates, and dynamic stretching.</p>
  </li>
  <li>
    <h2>Bodyweight Training</h2>
    <p>Bodyweight training utilizes your body weight as resistance to build strength and endurance. This type of workout is versatile, allowing you to exercise without the need for equipment. Examples of bodyweight exercises include push-ups, pull-ups, squats, and lunges.</p>
  </li>
  <li>
    <h2>Circuit Training</h2>
    <p>Circuit training involves performing a series of exercises in a row with minimal rest between each exercise. This workout type combines cardio and resistance training, providing a full-body workout that burns calories and builds muscle. An example of a circuit training workout might include push-ups, jumping jacks, lunges, and planks performed consecutively with minimal rest in between.</p>
  </li>
  <li>
    <h2>Group Fitness Classes</h2>
    <p>Group fitness classes offer structured, instructor-led workouts in a supportive and motivating environment. These classes often combine various types of workouts and can be an excellent option for beginners looking to try different exercises. Examples of group fitness classes include spinning, Zumba, yoga, and boot camps.</p>
  </li>
  <li>
    <h2>Strength and Conditioning</h2>
    <p>Strength and conditioning workouts focus on developing muscle strength, power, and endurance through targeted exercises. This type of workout is often used by athletes to enhance their performance in specific sports but can also benefit gym newcomers looking to build a solid foundation. Examples of strength and conditioning exercises include deadlifts, plyometric exercises, and Olympic lifts.</p>

</li>
<li>
  <h2>Low-Impact Workouts</h2>
  <p>Low-impact workouts are exercises that put minimal stress on your joints, making them an excellent option for beginners, older adults, or those recovering from injury. These workouts help improve cardiovascular health, muscle strength, and flexibility while reducing the risk of injury. Examples of low-impact exercises include swimming, walking, and cycling on a stationary bike.</p>
</li>
</ol>
<p>As a gym newbie, it's essential to try different types of workouts to find the ones that suit your preferences, goals, and fitness level. Remember to start slow, focus on proper form, and gradually increase intensity as your body adapts to the new exercises. Don't be afraid to ask for help from gym staff, personal trainers, or experienced gym-goers if you're unsure about any exercise or technique. Consistency and a balanced approach will ensure steady progress and a successful fitness journey.</p>
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