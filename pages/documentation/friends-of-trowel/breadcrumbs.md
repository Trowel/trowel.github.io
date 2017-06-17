---
layout: documentation
type: friendsoftrowel
title: Breadcrumbs
library: friendsOfTrowel/breadcrumbs
permalink: /documentation/friends-of-trowel/breadcrumbs/
affix: true
---

## Download

You can easily install *Trowel Breadcrumbs* by using npm, Yarn or Bower

```bash
# With bower
$ bower install trowel-breadcrumbs

# With npm
$ npm install trowel-breadcrumbs

# With yarn
$ yarn add trowel-breadcrumbs
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Breadcrumbs/archive/master.zip).

## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/breadcrumbs.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel Dependencies
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Components Breadcrumbs
@import './path/to/dependencies/trowel-breadcrumbs/src/scss/breadcrumbs.scss';
```

### *JavaScript*
You have several javascript files for different use cases :
* The browser ready file is available at `./dest/javascript/breadcrumbs.js` (a minified version exists at `dest/javascript/breadcrumbs.min.js`)
* The script written in es2015 and ready to `import` is available at `./src/javascript/breadcrumbs.js`


### *Twig template*
The twig template is located at the `./src/twig/breadcrumb.html.twig`.

## Usage

## Sass reference

## Javascript reference