#!/usr/bin/env node

const puppeteer = require('puppeteer');
const moment = require('moment');

var now = moment().format('YYYY-MM-DD-HHmmss');
var url = 'https://earth.nullschool.net';
var waitForMs = 2000;
var width = 1920;
var height = 1080;
var outfilename = `${now}_${width}x${height}_webscrot.png`;

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
