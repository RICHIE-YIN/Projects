import openai from 'openai';
require('dotenv').config(); // Add this line
const openai = require("openai-node");
const openai = new openai(process.env.REACT_APP_OPENAI_API_KEY);

module.exports = {
  generateMealPlan: async (req, res) => {
    try {
      const { calories, fat, protein, carbs, meals } = req.body;

      console.log("Request body:", req.body);

      if (
        !calories ||
        !fat ||
        !protein ||
        !carbs ||
        !meals ||
        isNaN(calories) ||
        isNaN(fat) ||
        isNaN(protein) ||
        isNaN(carbs) ||
        isNaN(meals)
      ) {
        return res.status(400).json({ error: "Invalid input values" });
      }

      const prompt = `Generate me a basic meal plan to hit my macros and nutrition goals. My target calories is ${calories}. I want ${fat}g fat, ${protein}g protein, and ${carbs}g carbs. Make it into ${meals} meals a day.`;

      const response = await openai.Completion.create({
        engine: "text-davinci-002",
        prompt,
        max_tokens: 200,
        n: 1,
        stop: null,
        temperature: 0.8,
      });

      const mealPlan = response.choices[0].text.trim();
      res.json({ mealPlan });
    } catch (err) {
      console.error("OpenAI API error:", err); // Add detailed error logging
      res.status(400).json(err);
    }
  },
};
