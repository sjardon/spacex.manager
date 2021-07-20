
const router = require('express').Router();

const cardRoutes = require('./card.route');

router.use('/v1/api',cardRoutes);

module.exports = router;