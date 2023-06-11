const WorkoutPlan = require('../models/workoutPlan.model');
const User = require('../models/user.model');

module.exports = {
createWorkoutPlan: (req, res) => {
    const { userId } = req.body;
    WorkoutPlan.create(req.body)
    .then(workoutPlan => {
        if (userId) {
        return User.findByIdAndUpdate(
            userId,
            { $push: { workoutPlan: workoutPlan._id } },
            { new: true }
        );
        } else {
        return workoutPlan;
        }
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
},

getAllWorkoutPlans: (req, res) => {
    WorkoutPlan.find({})
    .populate('workouts')
    .then(workoutPlans => res.json(workoutPlans))
    .catch(err => res.status(400).json(err));
},

getWorkoutPlanById: (req, res) => {
    WorkoutPlan.findById(req.params.id)
    .populate('workouts')
    .then(workoutPlan => res.json(workoutPlan))
    .catch(err => res.status(400).json(err));
},

updateWorkoutPlan: (req, res) => {
    WorkoutPlan.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .populate('workouts')
    .then(workoutPlan => res.json(workoutPlan))
    .catch(err => res.status(400).json(err));
},

deleteWorkoutPlan: (req, res) => {
    WorkoutPlan.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'WorkoutPlan successfully deleted' }))
    .catch(err => res.status(400).json(err));
}
};
