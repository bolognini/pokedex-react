# Poke-React ⚡️

A Pokédex of Kanto region built with React and WebComponents

### Installing

If you want to run the project on development mode, you just need node installed. Run the command below and all the dependencies will be downloaded and the project will open on your default browser.

```shell
npm install && npm start
```

## Running the tests

For running all the unity tests and checking their coverage, please run the command below on terminal

```shell
npm run test:coverage
```

Coverage report folder will be automatically created on root folder of the project. Access it running the command below. It should open the HTML archive that contains all detailed coverage report

```shell
cd coverage/lcov-report && open index.html
```

## Built With

* [WebComponents](https://github.com/bolognini/pokedex-webcomponents) - A WebComponents UI Components lib
* [Puppeteer](https://github.com/puppeteer/puppeteer) - For building a custom JSON
* [Styled Components](https://styled-components.com/) - CSS in JS library
* [Jest](https://jestjs.io/) - Testing framework
* [Husky](https://github.com/typicode/husky) - Git Hooks lib
* [ESLint](https://eslint.org/) - JavaScript Linter
* [Stylelint](http://stylelint.io/) - CSS Linter
* [Netlify](https://www.netlify.com/) - For CI/CD and deployment