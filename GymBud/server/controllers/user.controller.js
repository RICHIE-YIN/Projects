const User = require('../models/user.model');

module.exports = {
createUser: async (req, res) => {
    try {
        // Hash the password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create the user with the hashed password
        const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        salt: salt
        });

        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
    },

getAllUsers: (req, res) => {
    User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err));
},

getUserById: (req, res) => {
    User.findById(req.params.id)
    .populate('mealPlan')
    .populate('workoutPlan')
    .populate('posts')
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
},

updateUser: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
},

deleteUser: (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'User successfully deleted' }))
    .catch(err => res.status(400).json(err));
}
};
