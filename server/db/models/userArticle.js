const Sequelize = require("sequelize");
const db = require("../db");

const userArticle = db.define("userArticles", {
  // laceholder to query userArticles through table created by sequalize associations
});

module.exports = userArticle;
