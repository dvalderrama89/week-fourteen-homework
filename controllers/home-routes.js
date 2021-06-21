const { route } = require('./api');
const withAuth = require('../utils/auth');
const router = require('express').Router();

// Home routes 
router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn,
    });
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