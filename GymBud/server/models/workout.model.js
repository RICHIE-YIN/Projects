const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
category: {
    type: String,
    required: true
},
muscle_group: {
    type: String
},
media: {
    type: String
}
});

module.exports = mongoose.model('Workout', WorkoutSchema);
