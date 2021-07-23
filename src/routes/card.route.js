const router = require('express').Router();
const { cardController } = require('../controllers/');


router.get('/cards/:card', cardController.show );
router.get('/cards', cardController.all );
router.post('/cards', cardController.create );

module.exports = router;