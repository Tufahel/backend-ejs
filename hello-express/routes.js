const router = require('express').Router();
const {homeController, aboutController, faqController} = require('./controller'); 

router.get('/', homeController);

router.get('/about', aboutController);

router.get('/faq', faqController);


module.exports = router;