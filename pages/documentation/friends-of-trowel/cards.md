---
layout: documentation
type: friendsoftrowel
title: Cards
library: friendsOfTrowel/cards
permalink: /documentation/friends-of-trowel/cards/
affix: true
---

## Download

You can fetch *Trowel Cards* with *npm*, *yarn* or *bower*.

```bash
# With bower
$ bower install --save trowel-cards

# With npm
$ npm install --save trowel-cards

# With yarn
$ yarn add trowel-cards
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Cards/archive/master.zip).

## Installation

### *SCSS*
The main scss file to include to your main `.scss` file is located at the `./src/scss/cards.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel Dependencies
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Components Cards
@import './path/to/dependencies/trowel-cards/src/scss/cards.scss';
```

### *Twig files*
The twig template ready to be `include` or `embed` is located at `./src/twig/card.html.twig`.

## Usage

## Sass reference