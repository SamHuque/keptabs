const router = require("express").Router();
const Article = require("../db/models/article");
const puppeteer = require("puppeteer");

async function getCanonical(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const canonical = await page.$eval("link[rel=canonical]", link => link.href);
  await browser.close();
  return canonical;
}

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

router.post("/", async (req, res, next) => {
  const urlToCreate = await getCanonical(req.body.url);
  const addedUrl = await Article.create({ url: urlToCreate });
  res.json(addedUrl);
});

module.exports = router;
