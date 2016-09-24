---
layout: page
title: Getting Started
permalink: /using-trowel/getting-started
---

## What is exactly *Trowel* ?

The main purpose of *Trowel* is to make and use Sass libraries the most customizable possible.

* If you want to fasten your design development with front-end framework
* If you want thoses to be easily and fully customizable
* If you want to add or remove variant of visual component (e.g. button sizes or button themes)
* If you want to write less project's specific code

**Welcome aboard, *Trowel* is made for you !**

If your not a `Trowel Developer`, you won't directly use Trowel, but *Trowel Components* that provides to you visual components for your front-end design.

### The *Trowel Components*

*Trowel* itself does not provide any css, if you try to compile it without any trowel component, it will generate a blank stylesheet. But *Trowel Components* rely on *Trowel* :
s
We call "*Trowel Component*" any Sass library that is based on *Trowel* to generate the css of a visual component.

You can find the all the official *Trowel Components* [over here](https://github.com/FriendsOf*Trowel*), they are designed and maintained by the *Trowel Core Team*.

But you may also use some non-official *Trowel Component*, and if they follows the *Trowel Component* Guidelines, the following documentation is valid for them too.

## Getting started

### Download

To use and compile a `Trowel Component` you will need first to include [Trowel Core](https://github.com/Trowel/trowel) and [Sassy-Maps](https://github.com/at-import/Sassy-Maps) as we'll see later.

If you use bower, you can easily download those two dependencies with the following command :

``` sh
$ bower install trowel-core
```

### Includes

Once the dependencies downloaded, we'll import them into our Sass file. Make sure to import them in the order shown below :

``` scss
@import './path/to/bower_components/sassy-maps/sass/sassy-maps';
@import './path/to/bower_components/trowel-core/src/trowel';
```

Once thoses two assets included, we can now use a *Trowel Component*. For this tutorial we'll use the official *Trowel Button Component* from [FriendsOfTrowel/Buttons](https://github.com/FriendsOfTrowel/Buttons).

``` scss
@import './path/to/bower_components/sassy-maps/sass/sassy-maps';
@import './path/to/bower_components/trowel-core/src/trowel';

// Trowel Components
@import './path/to/bower_components/trowel-buttons/src/sass/style';
```

Now every assets are installed and we are ready to make some *Trowel magic* with the ***Trowel Variables***.

[Click here to checkout the step 2 of this Tutorial](/about)
