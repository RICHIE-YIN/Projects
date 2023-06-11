const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

module.exports.generateMealPlan = async (req, res) => {
    try {
    const { prompt } = req.body;
    const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
        prompt: prompt,
        max_tokens: 200,
        n: 1,
        stop: null,
        temperature: 1,
        },
        {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        }
    );
    res.json(response.data.choices[0].text);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};