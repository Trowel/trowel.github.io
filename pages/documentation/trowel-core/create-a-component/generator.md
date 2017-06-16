---
layout: documentation
type: trowel
title: Use the Component Generator
library: trowel/trowel
permalink: /documentation/trowel-core/create-a-component/generator/
affix: true
---

The Component Generator allows you to quickly create a Trowel Component following the Trowel guidelines.

## Installation
First, install [Yeoman](http://yeoman.io) and generator-trowel using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-trowel
```

## Usage
Once *yeoman* and *generator-trowel* installed globaly, you can generate your trowel component :

```bash
mkdir trowel-pod
cd trowel-pod
yo trowel
```

Fill the prompts and then you can kick things out !

## Tools

### Gulp
For compiling `scss` into `css` (and `twig` into `html` if you choose to add some twig template) or running a localserver with live reload for local testing, we setup a gulp workflow for you.

```bash
# compile scss/twig in watch mode & run local server
gulp watch
```

### Webpack
If you choose to generate some javascript, it comes with a webpack workflow allowing you to write with es6 syntax, as an exportable module and a browser ready script.

```bash
# transpile & bundle script file once
npm run build-javascript

# transpile & bundle script file in watch mode
npm run build-javascript-dev
```