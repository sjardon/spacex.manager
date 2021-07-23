
const router = require('express').Router();
const { cacheMiddleware } = require('../middlewares');
const cardRoutes = require('./card.route');
// router.get(cacheMiddleware);
router.use('/v1/api',cardRoutes);

module.exports = router;