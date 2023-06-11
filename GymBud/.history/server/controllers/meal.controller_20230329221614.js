const axios = require('axios');
const Meal = require('../models/meal.model');

// const generateMealPlan = (req, res) => {
//     const { calories, protein, carbs, fat, meals } = req.body;
//     const prompt = `Generate me a basic meal plan to hit my macros and nutrition goals. My target calories is ${calories}. I want ${fat}g fat, ${protein}g protein, and ${carbs}g carbs. Make it into ${meals} meals a day.`;

//     axios
//         .post(
//             'https://api.openai.com/v1/completions',
//             {
//                 prompt,
//                 max_tokens: 200,
//                 n: 1,
//                 stop: null,
//                 temperature: 0.7,
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer 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`,
//                 },
//             }
//         )
//         .then((response) => {
//             const generatedText = response.data.choices[0].text.trim();
//             console.log('Generated text:', generatedText); // Added this line
//             let mealPlan;
//             try {
//                 mealPlan = JSON.parse(generatedText);
//             } catch (e) {
//                 console.error('Error in generateMealPlan:', e);
//                 res.status(500).json({ message: 'Internal server error' });
//             }
//             console.log('Meal plan:', mealPlan); // Added this line

//             Meal.insertMany(mealPlan)
//                 .then((createdMeals) => {
//                     res.json({ mealPlan: createdMeals });
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                     res.status(500).json({ message: 'Internal server error' });
//                 });
//         })
//         .catch((error) => {
//             console.error(error);
//             res.status(500).json({ message: 'Internal server error' });
//         });
// };




module.exports = {
createMeal: (req, res) => {
Meal.create(req.body)
    .then((meal) => res.json(meal))
    .catch((err) => res.status(400).json(err));
},

getAllMeals: (req, res) => {
Meal.find({})
    .then((meals) => res.json(meals))
    .catch((err) => res.status(400).json(err));
},

getMealById: (req, res) => {
Meal.findById(req.params.id)
    .then((meal) => res.json(meal))
    .catch((err) => res.status(400).json(err));
},

updateMeal: (req, res) => {
Meal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((meal) => res.json(meal))
    .catch((err) => res.status(400).json(err));
},

deleteMeal: (req, res) => {
Meal.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Meal successfully deleted' }))
    .catch((err) => res.status(400).json(err));
},

};
