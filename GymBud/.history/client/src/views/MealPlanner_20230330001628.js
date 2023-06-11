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
      const response = await axios.post("/api/openai/mealplan", {
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

  return (
    <div>
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
        <p>{mealPlan}</p>
      </div>
    </div>
  );
};

export default MealPlanner;
