const Workout = require('../models/workout.model');

module.exports = {
createWorkout: (req, res) => {
    Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => res.status(400).json(err));
},

getAllWorkouts: (req, res) => {
    Workout.find({})
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json(err));
},

getWorkoutById: (req, res) => {
    Workout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => res.status(400).json(err));
},

updateWorkout: (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(workout => res.json(workout))
    .catch(err => res.status(400).json(err));
},

deleteWorkout: (req, res) => {
    Workout.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Workout successfully deleted' }))
    .catch(err => res.status(400).json(err));
}
};
