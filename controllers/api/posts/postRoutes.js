const { Post } = require('../../../models');
const withAuth = require('../../../utils/auth');
const router = require('express').Router();

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