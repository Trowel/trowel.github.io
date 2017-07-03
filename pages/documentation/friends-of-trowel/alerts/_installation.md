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