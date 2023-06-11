import React, { useState } from "react";
import axios from "axios";

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
    setMealPlan(response.data.mealPlan.split("\n"));
    } catch (error) {
    console.error("Error generating meal plan:", error);
    }
};

return (
    <div>
    <h1>Meal Planner</h1>
    {/* ... input fields ... */}
    <button onClick={getMealPlan}>Generate Meal Plan</button>
    <div>
        <h2>Generated Meal Plan</h2>
        <ul>
        {mealPlan && mealPlan.map((meal, index) => {
            if (meal.trim() !== '') {
            return <li key={index}>{meal.trim()}</li>;
            }
            return null;
        })}
        </ul>
    </div>
    </div>
);
};

export default MealPlanner;
