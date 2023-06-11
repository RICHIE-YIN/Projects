const express = require("express");
const router = express.Router();
const openaiController = require("../controllers/openai.controller");

router.post("/mealplan", openaiController.generateMealPlan);

module.exports = router;
