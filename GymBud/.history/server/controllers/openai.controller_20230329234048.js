const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

module.exports = {
generateMealPlan: async (req, res) => {
    try {
    const { calories, protein, carbs, fat, meals } = req.body;

    const prompt = `Generate me a basic meal plan to hit my macros and nutrition goals. My target calories is ${calories}. I want ${fat}g fat, ${protein}g protein, and ${carbs}g carbs. Make it into ${meals} meals a day.`;

    const response = await axios.post(API_URL, {
        prompt: prompt,
        max_tokens: 200,
        n: 1,
        stop: null,
        temperature: 0.7,
    }, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
    });

    res.json(response.data.choices[0].text.trim());
    } catch (error) {
    res.status(400).json(error.message);
    }
},
};
