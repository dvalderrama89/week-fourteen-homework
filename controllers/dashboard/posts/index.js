const router = require('express').Router();
const dashPostViewRoutes = require('./dashPostViewRoutes');

router.use('/', dashPostViewRoutes);

module.exports = router;
