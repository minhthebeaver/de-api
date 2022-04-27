const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { articleService } = require('../services');

const getArticles = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title', 'index']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await articleService.getArticles(filter, options);
  res.json(result);
});

const getArticleById = catchAsync(async (req, res) => {
  const { index } = req.query;
  const result = await articleService.getArticleById(req.params.id, index);
  res.json(result);
});

module.exports = {
  getArticles,
  getArticleById,
};
