const { Post } = require('../../../models');

const router = require('express').Router();

router.put('/update', async (req, res) => {
    try {
        const postData = await Post.update({
            post_title: req.body.title,
            post_body: req.body.postBody
        }, {
            where: {
                author_id: req.session.user_id
            }
        });
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;