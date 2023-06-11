const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
ingredients: [
    {
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    }
    }
],
nutrition: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
}
});

module.exports = mongoose.model('Meal', MealSchema);
