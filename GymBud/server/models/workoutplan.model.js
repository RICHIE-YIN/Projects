const mongoose = require('mongoose');

const WorkoutPlanSchema = new mongoose.Schema({
creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
},
workouts: [
    {
    workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout'
    },
    sets: Number,
    reps: Number
    }
]
});

module.exports = mongoose.model('WorkoutPlan', WorkoutPlanSchema);
