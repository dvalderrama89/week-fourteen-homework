const { route } = require('./api');
const withAuth = require('../utils/auth');
const router = require('express').Router();
const Post = require('../models/Post');

// Home routes 
router.get('/', async (req, res) => {

    try {
        const postData = await Post.findAll();
        const posts = postData.map(post => post.get({ plain: true }));

        res.render('homepage', {
            loggedIn: req.session.loggedIn,
            posts: posts,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn,
    });
});

// Log in page
router.get('/login', (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn,
    });
})

module.exports = router;