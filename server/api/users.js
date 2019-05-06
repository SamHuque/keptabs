const router = require("express").Router();
const User = require("../db/models/user");
const Article = require("../db/models/article");
const userArticle = require("../db/models/userArticle");

// get all users
router.get("/", async (req, res, next) => {
  try {
    const data = await User.findAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

//get all articles a user has on reading list
router.get("/articles", async (req, res, next) => {
  try {
    console.log("THIS IS THE SESSION", req.session);
    const userId = req.session.userId;
    const theUser = await User.findOne({
      where: {
        id: userId
      }
    });
    const actualData = await theUser.getArticles();
    res.json(actualData);
  } catch (error) {
    next(error);
  }
});

//get users by id
router.get("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const data = await User.findOne({
      where: {
        id: userId
      }
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const articleId = req.body.articleId;
    const createdArticle = await userArticle.create({
      articleId: articleId,
      userId: userId
    });
    res.json(createdArticle);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
