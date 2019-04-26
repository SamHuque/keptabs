const Sequelize = require("sequelize");
const db = require("../db");

const Article = db.define("articles", {
  url: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Article;
