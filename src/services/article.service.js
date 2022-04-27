const { Article, ArticleIndex } = require('../models');

const getArticles = async (filter, option = {}) => {
  try {
    const beginExec = new Date();

    const model = filter.index == 'true' ? ArticleIndex : Article;
    const res = await model
      .find({
        title: { $regex: `.*${filter.title || ''}.*` },
      })
      .select({ title: 1, _id: 1 })
      .limit(20);
    const endExec = new Date();
    const time = endExec - beginExec;

    return {
      time,
      data: res,
    };
  } catch (_err) {
    return {
      time: null,
      data: [],
    };
  }
};

const getArticleById = async (id, index) => {
  try {
    const model = index == 'true' ? ArticleIndex : Article;

    return model.findById(id);
  } catch (_err) {
    return {};
  }
};

module.exports = {
  getArticles,
  getArticleById,
};
