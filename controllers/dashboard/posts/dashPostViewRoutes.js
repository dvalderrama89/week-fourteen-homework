const router = require('express').Router();
const withAuth = require('../../../utils/auth');
const Post = require('../../../models/Post');
let moment = require('moment');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });
        res.render('dashboard-view-post', {post});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;