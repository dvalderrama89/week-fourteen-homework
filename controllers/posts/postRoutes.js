const router = require('express').Router();
const { User, Post } = require('../../models');
const { route } = require('../dashboard');

router.get('/view/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {include: { all: true }});
        const authorData = await User.findByPk(postData.author_id);
        const author = authorData.get({ plain: true });
        const post = postData.get({ plain: true });
        res.render('post-content', {loggedIn: req.session.loggedIn, post, author})
    } catch (err) { 
        console.log(err);
        res.render('404');
    }
});

module.exports = router;