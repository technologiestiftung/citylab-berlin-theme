# CityLAB Berlin Theme

TailwindCSS utilities for styling CityLAB Berlin websites and apps.

This styling package comes with two utilities.

1. `theme`: for a customized Tailwind theme (for e.g. colors, font families, etc.)
2. `base`: a Tailwind plugin that adds some basic styling to HTML markup. This means you get a CityLAB Berlin styling by just writing markup. All `base` styles can be overwritten in the `tailwind.config.js` or by adding Tailwind classes to your markup.

> You can use the `theme` without the `base` styles, but not the other way around.

## --- WORK IN PROGRESS ---

- [x] Write first README documentation
- [ ] Add `base` styles (maybe use _water.css_ as an inpiration)
- [ ] Find a way to provide the custom webfonts or provide explanation tow to include them
- [ ] Provide vanilla CSS stylesheet for projects that do not use TailwindCSS
- [x] Use @ts-check in JS files
- [ ] Review which kind of license makes sense
- [ ] Create demo site or section in README for theme options (e.g. color shades)
- [ ] Publish theme as a package

## Requirements

- Node.js >= 14.14.0 _(other versions may work, but are not tested)_
- TailwindCSS installed in your project _(a non-Tailwind, vanilla CSS stylesheet may be provided in the future)_

## Installation

### Create a `.nmprc` file at your project root with the following content:

```js
@technologiestiftung=https://npm.pkg.github.com/
```

> As the theme is currently published to the GitHub Packages registry, we need to tell NPM where to look for it. All other packages from NPM can be installed as usual.

### Install the theme package as a `devDependency`

```bash
npm install -D @technologiestiftung/citylab-berlin-theme
```

### Import and use styling utilities in your `tailwind.config.js`

```js
const { theme, base } = require("@technologiestiftung/citylab-berlin-theme");

module.exports = {
  presets: [theme],
  plugins: [base],
  // other settings
};
```

### Start styling!

You can start writing your markup, add Tailwind classes, add your own theme that will merge with this one, etc. Have fun!
