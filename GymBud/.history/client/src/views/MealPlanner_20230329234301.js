    import React, { useState } from 'react';
    import axios from 'axios';

    function MealPlanner() {
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fat, setFat] = useState('');
    const [meals, setMeals] = useState('');
    const [mealPlan, setMealPlan] = useState('');

    const generateMealPlan = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post('/api/openai/mealplan', {
            calories,
            protein,
            carbs,
            fat,
            meals,
        });

        setMealPlan(response.data);
        } catch (error) {
        console.error('Error generating meal plan:', error.message);
        }
    };

    return (
        <div>
        <h1>Meal Planner</h1>
        <form onSubmit={generateMealPlan}>
            <input type="number" placeholder="Target Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
            <input type="number" placeholder="Protein (g)" value={protein} onChange={(e) => setProtein(e.target.value)} />
            <input type="number" placeholder="Carbs (g)" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
            <input type="number" placeholder="Fat (g)" value={fat} onChange={(e) => setFat(e.target.value)} />
            <input type="number" placeholder="Meals per day" value={meals} onChange={(e) => setMeals(e.target.value)} />
            <button type="submit">Generate Meal Plan</button>
        </form>

        {mealPlan && (
            <div>
            <h2>Generated Meal Plan</h2>
            <pre>{mealPlan}</pre>
            </div>
        )}
        </div>
    );
    }

    export default MealPlanner;


