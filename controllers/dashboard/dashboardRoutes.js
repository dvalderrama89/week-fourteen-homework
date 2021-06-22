const router = require('express').Router();
const withAuth = require('../../utils/auth');
const Post = require('../../models/Post');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                id: req.session.user_id
            }
        });

        const posts = postData.map(post => post.get( {plain: true }));
        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            posts: posts,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/create', withAuth, (req, res) => {
    res.render('create', {
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;