# spice-app-react-intro

A sample app showing how to use [spice-app-react](https://github.com/gimelfarb/spice-app-react) to blend React with existing static HTML markup.

Live version: <https://spice-app-react-intro.surge.sh>

## Getting Started

### Run locally

Following will start the local webserver and open the default browser:

```bash
$ npm install
$ npm start
```

### Build

```bash
$ npm run build
```

Contents of `build` folder can be deployed to any static hosting provider.

## How it was made

App is based on [create-react-app](https://facebook.github.io/create-react-app/):

```bash
$ npx create-react-app spice-app-react-intro --use-npm
$ cd spice-app-react-intro
$ rm src/*
$ rm public/manifest.json
$ npm i spice-app-react
```

Then customize (see source code for the actual code):

* [`public/index.html`](./public/index.html) - static site design
* [`src/index.js`](./src/index.js) - use `Spice.blend(...)` instead of `ReactDOM.render(...)`
* [`src/App.js`](./src/App.js) - application logic, blending with elements already on the page

## Authors

* **Lev Gimelfarb** - *Initial work* - [@gimelfarb](https://github.com/gimelfarb)

See also the list of [contributors](https://github.com/gimelfarb/html-fiddle/contributors) who participated in this project.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Bulma](https://bulma.io) - Awesome modern CSS framework based on Flexbox

Also, thanks [@PurpleBooth](https://github.com/PurpleBooth), for the [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)!
