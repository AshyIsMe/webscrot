#!/usr/bin/env node

const puppeteer = require('puppeteer');
const moment = require('moment');
const commandLineArgs = require('command-line-args')

function usage() {
	const help = `
Usage: webscrot.js [OPTIONS]... URL [FILE]
Usage : scrot [OPTIONS]... [FILE]
  Where URL is the url to load in headless chrome for the screenshot.
  Where FILE is the target file for the screenshot.
  If FILE is not specified, a date-stamped file will be dropped in the
  current directory.
  -h, --help                display this help and exit
  -v, --version             output version information and exit
  -d, --delay NUM           wait NUM seconds before taking a shot
  -W, --width NUM           viewport width NUM pixels wide
  -H, --height NUM          viewport height NUM pixels high

  Example:
          webscrot.js 'https://earth.nullschool.net' screenshot.png

This program is free software see the file COPYING for licensing info.
Copyright Aaron Ash 2018
`;
	console.log(help);
	process.exit();
}

const optionDefinitions = [
	  { name: 'help'    ,  alias: 'h' ,  type: Boolean },
	  { name: 'version' ,  alias: 'v' ,  type: Boolean },
	  { name: 'delay'   ,  alias: 'd' ,  type: Number , defaultValue: 0 },
	  { name: 'width'   ,  alias: 'W' ,  type: Number , defaultValue: 1920 },
	  { name: 'height'  ,  alias: 'H' ,  type: Number , defaultValue: 1080 },
	  { name: 'url'     , type: String , defaultOption: true, defaultValue: '' },
]

const positionalOptionDefinitions = [
	  { name: 'outfile', alias: 'o', type: String, defaultOption: true },
]

const mainOptions = commandLineArgs(optionDefinitions, { stopAtFirstUnknown: true })
const argv = mainOptions._unknown || []

const positionalOptions = commandLineArgs(positionalOptionDefinitions, { argv, stopAtFirstUnknown: true  })

var now = moment().format('YYYY-MM-DD-HHmmss');
var outfilename = positionalOptions.outfile || `${now}_${mainOptions.width}x${mainOptions.height}_webscrot.png`;


if(mainOptions.version) {
	var pjson = require('./package.json');
	console.log(pjson.version);
	process.exit();
}
if(mainOptions.help) {
	usage();
}
if(mainOptions.url == '') {
	usage();
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: mainOptions.width, height: mainOptions.height});
  await page.goto(mainOptions.url, {waitUntil: 'networkidle2'});
  //await page.goto(mainOptions.url);
  await page.waitFor(mainOptions.delay * 1000);
  await page.screenshot({path: outfilename});

  await browser.close();
})();
