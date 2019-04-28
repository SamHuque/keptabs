// this file does not work when I require it in server/articles.js

const puppeteer = require("puppeteer");

async function getCanonical(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const canonical = await page.$eval("link[rel=canonical]", link => link.href);
  await browser.close();
  return canonical;
}

module.exports = { getCanonical };
