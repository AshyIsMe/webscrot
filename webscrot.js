#!/usr/bin/env node

const puppeteer = require('puppeteer');
const moment = require('moment');
const commandLineUsage = require('command-line-usage')

var now = moment().format('YYYY-MM-DD-HHmmss');
var url = 'https://earth.nullschool.net';
var waitForMs = 2000;
var width = 1920;
var height = 1080;
var outfilename = `${now}_${width}x${height}_webscrot.png`;

const usage = `
Usage: webscrot.js [OPTIONS]... URL [FILE]
Usage : scrot [OPTIONS]... [FILE]
  Where URL is the url to load in headless chrome for the screenshot.
  Where FILE is the target file for the screenshot.
  If FILE is not specified, a date-stamped file will be dropped in the
  current directory.
  -h, --help                display this help and exit
  -v, --version             output version information and exit
  -d, --delay NUM           wait NUM seconds before taking a shot
  -w, --width NUM           viewport width NUM pixels wide
  -h, --height NUM          viewport height NUM pixels high

  Example:
          webscrot.js 'https://earth.nullschool.net' 'earthnullschool_webscrot.png'

This program is free software see the file COPYING for licensing info.
Copyright Aaron Ash 2018
`


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
