const router = require("express").Router();
const Article = require("../db/models/article");

// find all articles
router.get("/", async (req, res, next) => {
  try {
    const data = await Article.findAll({});
    res.json(data);
  } catch (error) {
    next(error);
  }
});

//find articles by id
router.get("/:id", async (req, res, next) => {
  try {
    const articleId = req.params.id;
    const data = await Article.findOne({
      where: {
        id: articleId
      }
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {});

module.exports = router;
