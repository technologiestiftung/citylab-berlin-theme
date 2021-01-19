# CityLAB Berlin Theme

**Styling utilities for CityLAB Berlin websites and apps**. Either use the utilities for [TailwindCSS](https://tailwindcss.com/) (recommended) or drop the vanilla CSS stylesheet into your project.

## Understand

### TailwindCSS utilities

The recommended way to use this styling package is to incorporate the following two styling utilities into your TailwindCSS project:

1. `theme`: for a customized Tailwind theme (for e.g. colors, font families, etc.)
2. `base`: a Tailwind plugin that adds some basic styling to HTML markup. This means you get a CityLAB Berlin styling by just writing markup. All `base` styles can be overwritten in the `tailwind.config.js` or by adding Tailwind classes to your markup.

> You can use the `theme` without the `base` styles, but not the other way around.

### Vanilla CSS

If you prefer to not use Tailwind, a vanilla CSS stylesheet is provided for simply being dropped into a project. With this you will also get a basic CityLAB Berlin appearance out-of-the-box. This approach is not recommended as you won't be able to benefit from Tailwind's [utility](https://tailwindcss.com/docs/utility-first) and [design system](https://tailwindcss.com/docs/theme) approaches.

For vanilla CSS installation instructions, see [here](#vanilla-css-installation).

## Requirements

- Node.js >= 14.14.0 _(other versions may work, but are not tested)_
- TailwindCSS installed in your project (_not necessary if you use the vanilla CSS stylesheet_)

## Installation

1: Create a `.npmrc` file at your project root with the following content:

```
@technologiestiftung:registry=https://npm.pkg.github.com
```

> As the theme is currently published to the GitHub Packages registry, we need to tell NPM where to look for it. All other packages from NPM can be installed as usual.

2: Install the theme package as a `devDependency`

```bash
npm install -D @technologiestiftung/citylab-berlin-theme
```

3: Import and use styling utilities in your `tailwind.config.js`

```js
const { theme, base } = require("@technologiestiftung/citylab-berlin-theme");

module.exports = {
  presets: [theme],
  plugins: [base], // <- optional
  // other settings
};
```

You can start writing your markup, add Tailwind classes, add your own theme that will merge with this one, etc. Have fun!

### CityLAB Berlin font

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

> Example can be found in `src/style.css`. Remember to change the paths to your font files. Also described in the [Tailwind docs](https://tailwindcss.com/docs/adding-base-styles#font-face-rules).

### Vanilla CSS installation

There are no special requirements for using the CSS stylesheet in a project. Simply follow the installation steps 1 and 2 and then import the stylesheet in your CSS:

```css
@import url("node_modules/@technologiestiftung/citylab-berlin-theme/assets/style.css");
```

In order to include the _National_ font family, create a folder `assets/fonts/` and add the relevant font files. The stylesheet will then be able to find them.

### CityLAB Berlin logo

Depending on your project setup, you can include the CityLAB Berlin logo in different ways.

Projects with a build step:

```js
const logo = require("@technologiestiftung/citylab-berlin-theme/assets/citylab_logo.svg");
```

Projects without a build step:

```html
<img
  src="node_modules/@technologiestiftung/citylab-berlin-theme/public/assets/citylab_logo.svg"
  alt="CityLAB Berlin Logo"
/>
```

## Developing

In order to work on this theme, first make sure to install all dependencies:

```bash
npm install
```

You can start a local development server with:

```bash
npm run dev
```

`src/theme.js` and `src/base.js` are the files which define the theme and the base styles. The documentation of all available base styles can be found in `public/index.html`, served on `localhost:8080`.
