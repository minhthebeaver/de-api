const express = require('express');
const authController = require('../../controllers/article.controller');

const router = express.Router();

router.get('/', authController.getArticles);
router.get('/:id', authController.getArticleById);

module.exports = router;
