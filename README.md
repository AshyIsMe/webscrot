# webscrot

Screenshot a webpage similar to scrot for desktop screenshots

## Install

Pre-requisites:

* npm
* latest node - n latest
* chromium-browser - for all the shared lib dependencies

### Ubuntu 16.04 

Tested in an lxc container: lxc launch ubuntu:16.04

```
# As root create a sudo user, and then swap to it
adduser foobar
usermod -aG sudo foobar
su foobar

sudo apt update && sudo apt install npm && sudo npm install -g n && sudo n latest

# We need to install chromium-browser so we have all the shared libs the puppeteer build needs
sudo apt install chromium-browser

git clone https://github.com/ashyisme/webscrot && cd webscrot
npm install .  # For some reason puppeteer only downloads the chromium build if you do a local install
sudo npm install --global .
cd ~

webscrot https://earth.nullschool.net

```


```
$ git clone https://github.com/ashyisme/webscrot && cd webscrot
$ npm install --global .
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
