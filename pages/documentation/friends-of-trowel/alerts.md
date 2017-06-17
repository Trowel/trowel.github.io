---
layout: documentation
type: friendsoftrowel
title: Alerts
library: friendsOfTrowel/alerts
permalink: /documentation/friends-of-trowel/alerts/
affix: true
---

## Download

You can fetch *Trowel Alerts* with *npm*, *yarn* or *bower*.

```bash
# With bower
$ bower install --save trowel-alerts

# With npm
$ npm install --save trowel-alerts

# With yarn
$ yarn add trowel-alerts
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Alerts/archive/master.zip).

## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/alerts.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Alerts
@import './path/to/dependencies/trowel-alerts/src/scss/alerts';
```

### *JavaScript*
You have several javascript files for different use cases :
* The browser ready file is available at `./dest/javascript/alerts.js` (a minified version exists at `dest/javascript/alerts.min.js`)
* The script written in es2015 and ready to `import` is available at `./src/javascript/alerts.js`


### *Twig template*
The twig template ready to be `include` or `embed` is located at `./src/twig/alert.html.twig`.

## Usage

## Sass reference
