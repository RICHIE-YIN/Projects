const Post = require('../models/post.model');
const User = require('../models/user.model');

module.exports = {
createPost: (req, res) => {
    const { userId } = req.body;
    Post.create(req.body)
    .then(post => {
        if (userId) {
        return User.findByIdAndUpdate(
            userId,
            { $push: { posts: post._id } },
            { new: true }
        );
        } else {
        return post;
        }
    })
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
},

getAllPosts: (req, res) => {
    Post.find({})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(err));
},

getPostById: (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(err));
},

updatePost: (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(post => res.json(post))
    .catch(err => res.status(400).json(err));
},

deletePost: (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Post successfully deleted' }))
    .catch(err => res.status(400).json(err));
}
};