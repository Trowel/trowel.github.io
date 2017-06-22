## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/covers.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Covers
@import './path/to/dependencies/trowel-covers/src/scss/covers';
```

### *JavaScript*
You have several javascript files for different use cases :
* The browser ready file is available at `./dest/javascript/covers.js` (a minified version exists at `dest/javascript/covers.min.js`)
* The script written in es2015 and ready to `import` is available at `./src/javascript/covers.js`


### *Twig template*
The twig template ready to be `include` or `embed` is located at `./src/twig/cover.html.twig`.
