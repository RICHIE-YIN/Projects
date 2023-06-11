const axios = require('axios');
const Meal = require('../models/meal.model');

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
}
};
