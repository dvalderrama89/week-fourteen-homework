const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require ('./dashboard');
const postRotues = require('./posts');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/posts', postRotues);

module.exports = router;