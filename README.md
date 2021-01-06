# CityLAB Berlin Theme

TailwindCSS utilities for styling CityLAB Berlin websites and apps.

This styling package comes with two utilities.

1. `theme`: for a customized Tailwind theme (for e.g. colors, font families, etc.)
2. `base`: a Tailwind plugin that adds some basic styling to HTML markup. This means you get a CityLAB Berlin styling by just writing markup. All `base` styles can be overwritten in the `tailwind.config.js` or by adding Tailwind classes to your markup.

> You can use the `theme` without the `base` styles, but not the other way around.

## --- WORK IN PROGRESS, PLEASE IGNORE ---

- [x] Write first README documentation
- [x] Provide dev instructions
- [x] Find a way to provide the custom webfonts or provide explanation how to include them
- [x] Provide basic assets (just the CityLAB logo at the moment)
- [x] Use @ts-check in JS files
- [x] Create workflow to publish package upon new release
- [x] Update scope from dnsos to technologiestiftung
- [x] Add `base` styles (maybe use _water.css_ as an inpiration)
- [x] Only provide mobile-first `base` styles (responsiveness issue in Tailwind preset)
- [x] Create focus styles
- [ ] Review which kind of license makes sense
- [ ] Create demo site or section in README for theme options (e.g. color shades)
- [ ] Publish theme as a package
- [ ] Test utilities in other codebases (React, 11ty, etc.)

For later:

- [ ] Create styled (and accessible) radio/checkbox inputs and select
- [ ] Review why FF and Safari don't focus links (generally)
- [ ] Provide vanilla CSS stylesheet for projects that do not use TailwindCSS

## Requirements

- Node.js >= 14.14.0 _(other versions may work, but are not tested)_
- TailwindCSS installed in your project _(a non-Tailwind, vanilla CSS stylesheet may be provided in the future)_

## Installation

Create a `.npmrc` file at your project root with the following content:

```
@technologiestiftung:registry=https://npm.pkg.github.com
```

> As the theme is currently published to the GitHub Packages registry, we need to tell NPM where to look for it. All other packages from NPM can be installed as usual.

Install the theme package as a `devDependency`

```bash
npm install -D @technologiestiftung/citylab-berlin-theme
```

Import and use styling utilities in your `tailwind.config.js`

```js
const { theme, base } = require("@technologiestiftung/citylab-berlin-theme");

module.exports = {
  presets: [theme],
  plugins: [base], // <- optional
  // other settings
};
```

You can start writing your markup, add Tailwind classes, add your own theme that will merge with this one, etc. Have fun!

### One more thing!

If you want to use the CityLAB Berlin font (called _National_), you will have to add it to your project manually. Before doing so, make sure you have the rights for using the font according to your license.

Define the custom font in your root CSS file like so:

```css
@font-face {
  font-family: "National Regular";
  font-style: normal;
  font-weight: 400;
  src: local("National Regular"),
    url(assets/fonts/NationalWeb-Regular.woff2) format("woff2"), url(assets/fonts/NationalWeb-Regular.woff)
      format("woff");
}
/* ... */
```

> Example can be found in `src/style.css`. Remember to change the paths to your font files!

> Also described in the [Tailwind docs](https://tailwindcss.com/docs/adding-base-styles#font-face-rules).

## Developing

In order to work on this theme, first make sure to install all dependencies:

```bash
npm install
```

You can start a local development server with:

```bash
npm run dev
```

`src/theme.js` and `src/base.js` are the files which define the theme and the base styles. A simple "demo" of all available base styles can be found in `public/index.html`, served on `localhost:8080`.
