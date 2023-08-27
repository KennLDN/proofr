const express = require('express');
const router = express.Router();

const helloWorld = require('../controllers/helloWorld');
const returnPlainArticle = require('../controllers/returnPlainArticle');

router.get('/hello', helloWorld.run);
router.get('/plain-article', returnPlainArticle.run);

module.exports = router;
