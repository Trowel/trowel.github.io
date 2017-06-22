## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/breadcrumbs.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Breadcrumbs
@import './path/to/dependencies/trowel-breadcrumbs/src/scss/breadcrumbs';
```

### *JavaScript*
You have several javascript files for different use cases :
* The browser ready file is available at `./dest/javascript/breadcrumbs.js` (a minified version exists at `dest/javascript/breadcrumbs.min.js`)
* The script written in es2015 and ready to `import` is available at `./src/javascript/breadcrumbs.js`


### *Twig template*
The twig template ready to be `include` or `embed` is located at `./src/twig/breadcrumb.html.twig`.