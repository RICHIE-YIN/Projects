const UserController = require('../controllers/user.controller');
const WorkoutController = require('../controllers/workout.controller');
const MealController = require('../controllers/meal.controller');
const WorkoutPlanController = require('../controllers/workoutPlan.controller');
const PostController = require('../controllers/post.controller');

module.exports = function(app) {
// User routes
app.post('/api/users', UserController.createUser);
app.get('/api/users', UserController.getAllUsers);
app.get('/api/users/:id', UserController.getUserById);
app.put('/api/users/:id', UserController.updateUser);
app.delete('/api/users/:id', UserController.deleteUser);

// Workout routes
app.post('/api/workouts', WorkoutController.createWorkout);
app.get('/api/workouts', WorkoutController.getAllWorkouts);
app.get('/api/workouts/:id', WorkoutController.getWorkoutById);
app.put('/api/workouts/:id', WorkoutController.updateWorkout);
app.delete('/api/workouts/:id', WorkoutController.deleteWorkout);

// Meal routes
app.post('/api/meals', MealController.createMeal);
app.get('/api/meals', MealController.getAllMeals);
app.get('/api/meals/:id', MealController.getMealById);
app.put('/api/meals/:id', MealController.updateMeal);
app.delete('/api/meals/:id', MealController.deleteMeal);

// WorkoutPlan routes
app.post('/api/workoutplans', WorkoutPlanController.createWorkoutPlan);
app.get('/api/workoutplans', WorkoutPlanController.getAllWorkoutPlans);
app.get('/api/workoutplans/:id', WorkoutPlanController.getWorkoutPlanById);
app.put('/api/workoutplans/:id', WorkoutPlanController.updateWorkoutPlan);
app.delete('/api/workoutplans/:id', WorkoutPlanController.deleteWorkoutPlan);

// Post routes
app.post('/api/posts', PostController.createPost);
app.get('/api/posts', PostController.getAllPosts);
app.get('/api/posts/:id', PostController.getPostById);
app.put('/api/posts/:id', PostController.updatePost);
app.delete('/api/posts/:id', PostController.deletePost);

// MealPlan routes
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.originalUrl}`);
    console.log('Request headers:', JSON.stringify(req.headers, null, 2));
    console.log('Request bodygdfbfdbf:', JSON.stringify(req.body, null, 2));
    next();
});

};
