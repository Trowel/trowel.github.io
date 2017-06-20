---
layout: documentation
type: friendsoftrowel
title: Layouts
library: friendsOfTrowel/layouts
permalink: /documentation/friends-of-trowel/layouts/
affix: true
---

## Download

### Download
You can fetch *Trowel Layouts* with *npm*, *yarn* or *bower*.

```bash
# With bower
$ bower install --save trowel-layouts

# With npm
$ npm install --save trowel-layouts

# With yarn
$ yarn add trowel-layouts
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Layouts/archive/master.zip).

## Installation

### *SCSS*
The main scss file to include to your main `.scss` file is located at the `./src/scss/Layouts.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Layouts
@import './path/to/dependencies/trowel-layouts/src/scss/layouts';
```

## Usage

## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

| variable | default value | description |
| -------- | ------------- | ----------- |
| `$layout--synthax` | `null` | syntax config for `.container`, `.grid` and `.flex-grid` blocks |

### Enables

You can avoid the generation of some css with those following variables

| variable | default value | description |
| -------- | ------------- | ----------- |
| `$container--enable` | `true` | enable the generation of style rules for the `.container` block |
| `$grid--enable` | `true` | enable the generation of style rules for the `.grid` block |
| `$flexgrid--enable` | `true` | enable the generation of style rules for the `.flex-grid` block |

### Component variables

#### Container

| variable | default value | description |
| -------- | ------------- | ----------- |
| `$container--padding-x` | `1rem` | Sets the left and right padding for the `.container` block |
| `$container--width` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;'@sm':&nbsp;540px,<br>&nbsp;&nbsp;&nbsp;&nbsp;'@md':&nbsp;720px,<br>&nbsp;&nbsp;),<br>&nbsp;&nbsp;'-fluid': 100%,<br>)</code> | Sets the width for the `.container` block |

#### Grid

| variable | default value | description |
| -------- | ------------- | ----------- |
| $grid--gutter | `$container--padding-x` | sets the gutter space between two col |
| $grid--columns | `12` | <strong>not a trowel variable</strong> sets the max numbers of columns on a grid row |

#### Flex-grid

| variable | default value | description |
| -------- | ------------- | ----------- |
| `$flexgrid--gutter` | `0.5em` | sets the gutter space between two col |
| `$flexgrid--flex-wrap` | `wrap` | sets the flex-wrap property on block |
| `$flexgrid--align-items` | `null` | sets the align-items property on block |
| `$flexgrid--justify-content` | `null` | sets the justify-content property on block |
| `$flexcol--flex-shrink` | `null` | sets the flex-shrink property on `.flex-grid__col` elements |
| `$flexcol--flex-basis` | `null` | sets the flex-basis property on `.flex-grid__col` elements |
| `$flexcol--flex-grow` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;null,<br>&nbsp;&nbsp;'~grow-1':&nbsp;1,<br>)</code> | sets the flex-grow property on `.flex-grid__col` elements |
