const router = require('express').Router();
const withAuth = require('../../utils/auth');
const Post = require('../../models/Post');
let moment = require('moment');

router.get('/', withAuth, async (req, res) => {
    console.log('dashboard get route');
    try {
        const postData = await Post.findAll({
            where: {
                author_id: req.session.user_id
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

router.post('/create', withAuth, async (req, res) => {
    try 
    {
        currentDatetime =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        const postData = await Post.create({
            post_title: req.body.title,
            post_body: req.body.postBody,
            author_id: req.session.user_id,
            created_at: currentDatetime,
            updated_at: currentDatetime,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;