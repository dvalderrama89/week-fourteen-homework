const { Post, User, Comment } = require('../../../models');
const withAuth = require('../../../utils/auth');
const router = require('express').Router();

router.post('/comment', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id);
        const commentData = await Comment.create({
            comment_body: req.body.commentBody,
            post_id: req.body.postId,
            author_name: userData.name,
            author_id: userData.id
        });
        console.log('hi create');
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/update/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update({
            post_title: req.body.title,
            post_body: req.body.postBody
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;