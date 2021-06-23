const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes');
const postRoutes = require('./posts');

router.use('/', dashboardRoutes);
router.use('/posts', postRoutes)

module.exports = router;
