import React, { useState } from "react";
import axios from "axios";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const MealPlanner = () => {
const [calories, setCalories] = useState("");
const [protein, setProtein] = useState("");
const [carbs, setCarbs] = useState("");
const [fat, setFat] = useState("");
const [meals, setMeals] = useState("");
const [mealPlan, setMealPlan] = useState("");

const getMealPlan = async () => {
    try {
    const response = await axios.post("http://localhost:8000/api/openai/mealplan", {
        calories,
        protein,
        carbs,
        fat,
        meals,
    });
    setMealPlan(response.data.mealPlan);
    } catch (error) {
    console.error("Error generating meal plan:", error);
    }
};

const renderMealPlan = () => {
    if (mealPlan) {
    const mealList = mealPlan.split(/(?=Meal )/);
    return (
        <div>
        {mealList.map((meal, index) => (
            <p key={index}>{meal.trim()}</p>
        ))}
        </div>
    );
    }
};

return (
    <div>
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
        </div>
    <h1>Meal Planner</h1>
    <div>
        <label>Calories: </label>
        <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        />
    </div>
    <div>
        <label>Protein (g): </label>
        <input
        type="number"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        />
    </div>
    <div>
        <label>Carbs (g): </label>
        <input
        type="number"
        value={carbs}
        onChange={(e) => setCarbs(e.target.value)}
        />
    </div>
    <div>
        <label>Fat (g): </label>
        <input
        type="number"
        value={fat}
        onChange={(e) => setFat(e.target.value)}
        />
    </div>
    <div>
        <label>Meals per day: </label>
        <input
        type="number"
        value={meals}
        onChange={(e) => setMeals(e.target.value)}
        />
    </div>
    <button onClick={getMealPlan}>Generate Meal Plan</button>
    <div>
        <h2>Generated Meal Plan</h2>
        {renderMealPlan()}
    </div>
    </div>
);
};

export default MealPlanner;
