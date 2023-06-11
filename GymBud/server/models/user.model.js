    const mongoose = require('mongoose');
    const bcrypt = require('bcryptjs');

    const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mealPlan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meal'
    },
    workoutPlan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WorkoutPlan'
    },
    posts: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
        }
    ]
    });
    module.exports = mongoose.model('User', UserSchema);
