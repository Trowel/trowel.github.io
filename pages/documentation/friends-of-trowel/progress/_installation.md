## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/progress.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Progress
@import './path/to/dependencies/trowel-progress/src/scss/progress';
```

### *Twig template*
The twig template ready to be `include` or `embed` is located at `./src/twig/progres.html.twig`.
