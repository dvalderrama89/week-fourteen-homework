const router = require('express').Router();
const { User, Post } = require('../../models');
const { route } = require('../dashboard');

router.get('/view/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const authorData = await User.findByPk(postData.author_id);
        const author = authorData.get({ plain: true });
        const post = postData.get({ plain: true });
        res.render('post-content', {post, author})
    } catch (err) { 
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;