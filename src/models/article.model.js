const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  id: { type: String },
  submitter: { type: String },
  authors: { type: String },
  title: { type: String },
  comments: { type: String },
  journal: { type: String },
  doi: { type: String },
  report: { type: String },
  categories: { type: String },
  license: { type: String },
  abstract: { type: String },
  update_date: { type: String },
  versions: { type: Array },
  authors_parsed: { type: Array },
});

const Article = mongoose.model('de-collection', articleSchema, 'de-collection');

module.exports = Article;
