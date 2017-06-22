## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/modals.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Modals
@import './path/to/dependencies/trowel-modals/src/scss/modals';
```

### *JavaScript*
You have several javascript files for different use cases :
* The browser ready file is available at `./dest/javascript/modals.js` (a minified version exists at `dest/javascript/modals.min.js`)
* The script written in es2015 and ready to `import` is available at `./src/javascript/modals.js`
