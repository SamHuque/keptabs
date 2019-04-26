const User = require("./user");
const Article = require("./article");
const userArticle = require("./userArticle");
const db = require("../db");

Article.belongsToMany(User, { through: "userArticles" });
User.belongsToMany(Article, { through: "userArticles" });

module.exports = {
  User,
  Article,
  db,
  userArticle
};
