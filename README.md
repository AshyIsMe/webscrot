# webscrot

Screenshot a webpage similar to scrot for desktop screenshots

## Install
```
$ git clone https://github.com/ashyisme/webscrot && cd webscrot
$ npm i .
```

## Usage

```
Usage: webscrot [OPTIONS]... URL [FILE]
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
          webscrot 'https://earth.nullschool.net' screenshot.png

This program is free software see the file COPYING for licensing info.
Copyright Aaron Ash 2018
```

## TODO

* The rest of the scrot style features that make sense:
  * --exec APP
  * Special Strings for --exec and filename
* Put it up on AUR
