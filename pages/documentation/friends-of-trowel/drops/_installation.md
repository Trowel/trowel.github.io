## Installation

### *SCSS*
The main scss file to include to your main `.scss` file is located at the `./src/scss/drops.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Drops
@import './path/to/dependencies/trowel-drops/src/scss/drops';
```

### *JavaScript*
The javascript file is located at the `./dest/javascript/drops.js`. The optimized and minified version is available at `dest/javascript/drops.min.js`.
