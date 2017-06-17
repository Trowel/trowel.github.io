---
layout: documentation
type: friendsoftrowel
title: Ribbons
library: friendsOfTrowel/ribbons
permalink: /documentation/friends-of-trowel/ribbons/
affix: true
---

## Download

You can fetch *Trowel Ribbons* with *npm*, *yarn* or *bower*.

```bash
# With bower
$ bower install --save trowel-ribbons

# With npm
$ npm install --save trowel-ribbons

# With yarn
$ yarn add trowel-ribbons
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Ribbons/archive/master.zip).


## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/ribbons.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel Dependencies
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Components Ribbons
@import './path/to/dependencies/trowel-ribbons/src/scss/ribbons.scss';
```


### *Twig template*
The twig template ready to be `include` or `embed` is located at `./src/twig/ribbon.html.twig`.

## Usage

## Sass reference