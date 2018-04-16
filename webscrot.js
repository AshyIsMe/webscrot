const puppeteer = require('puppeteer');

var url = 'https://earth.nullschool.net';
var outfilename = 'earthnullschool.png';
var waitForMs = 2000;
var width = 1920;
var height = 1080;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: width, height: height});
  await page.goto(url, {waitUntil: 'networkidle2'});
  //await page.goto(url);
  await page.waitFor(waitForMs);
  await page.screenshot({path: outfilename});

  await browser.close();
})();
