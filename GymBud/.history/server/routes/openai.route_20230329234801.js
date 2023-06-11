const { generateMealPlan } = require('../controllers/openai.controller');
const express = require('express');
const router = express.Router();

router.post('/mealplan', generateMealPlan);

module.exports = router;
