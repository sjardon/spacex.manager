const router = require('express').Router();
const { cardController } = require('../controllers/');


router.post('/cards', cardController.create );

module.exports = router;