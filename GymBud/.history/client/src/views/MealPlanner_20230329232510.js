import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Configuration, OpenAIApi } from 'openai';

export default function MealPlanner() {
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fat, setFat] = useState('');
    const [numMeals, setNumMeals] = useState('');
    const [meals, setMeals] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const configuration = new Configuration({
                apiKey: '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',
            });
            const openai = new OpenAIApi(configuration);
            openai.createCompletion(
                {
                    model: 'text-davinci-003',
                    prompt: `Generate me a basic meal plan to hit my macros and nutrition goals. My target calories is ${calories}. I want ${fat}g fat, ${protein}g protein, and ${carbs}g carbs. Make it into ${meals} meals a day.`,
                    max_tokens: 200,
                    n: 1,
                    stop: null,
                    temperature: 0.7,
                },
                (err, response) => {
                    if (err) {
                        console.error('Error in generateMealPlan:', err);
                        return;
                    }
                    const generatedText = response.choices[0].text.trim();
                    console.log('Generated text:', generatedText);
                    let mealPlan;
                    try {
                        mealPlan = JSON.parse(generatedText);
                    } catch (e) {
                        console.error('Error in generateMealPlan:', e);
                        return;
                    }
                    console.log('Meal plan:', mealPlan);
    
                    axios
                        .post('/api/meals', mealPlan)
                        .then((response) => {
                            setMeals(response.data.mealPlan);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }
            );
        } catch (error) {
            console.error(error);
        }
    };
    
    

    const deleteMeal = async (index) => {
        const updatedMeals = meals.filter((_, i) => i !== index);
        setMeals(updatedMeals);
        try {
            const response = await axios.post('/api/meals', {
                calories,
                protein,
                carbs,
                fat,
                meals: numMeals,
                existingMeals: updatedMeals,
            });
            setMeals(response.data.mealPlan);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="meal-planner">
        <h1>AI Meal Planner</h1>
        <form onSubmit={handleSubmit}>
    <input
        type="number"
        placeholder="Target calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
    />
    <input
        type="number"
        placeholder="Target protein (g)"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
    />
    <input
        type="number"
        placeholder="Target carbs (g)"
        value={carbs}
        onChange={(e) => setCarbs(e.target.value)}
    />
    <input
        type="number"
        placeholder="Target fat (g)"
        value={fat}
        onChange={(e) => setFat(e.target.value)}
    />
    <input
        type="number"
        placeholder="Number of meals"
        value={numMeals}
        onChange={(e) => setNumMeals(e.target.value)}
    />
    <button type="submit">Generate Meal Plan</button>
    </form>
    <div className="meals-container">
    {meals.map((meal, index) => (
        <div className="meal" key={index}>
        <h3>{meal.name}</h3>
        <p>Calories: {meal.calories}</p>
        <p>Protein: {meal.protein}g</p>
        <p>Carbs: {meal.carbs}g</p>
        <p>Fat: {meal.fat}g</p>
        <button onClick={() => deleteMeal(index)}>Delete</button>
        </div>
    ))}
    </div>

        </div>
    );
    }
