require('dotenv').config(); // Add this line
const openai = require("openai-node");
openai.apiKey = "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";
console.log("API key:", openai.apiKey);

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
      console.log("res.json response:", response);
      console.log("mealplan response:", mealPlan);
    } catch (err) {
      console.error("OpenAI API error:", err); // Add detailed error logging
      res.status(400).json(err);
    }
  },
};
