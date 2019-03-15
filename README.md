# SeMI-Website ![Travis Build](https://travis-ci.org/SeMI-network/semi-website.svg?branch=master "Logo Travis Build")

Dependencies:
- [Bundler](https://bundler.io/)
- [npm](https://www.npmjs.com/)

Make sure both (Bundler and npm) are installed on your system before you proceed. For more information on how to install check above links.

## :rocket: Deployment 

Google cloud sdk with nginx is used for production.

## :construction: Local development

To start a project first install Bundler as described [in the Bundler documentation](https://bundler.io/).

To install the dependencies (used for jekyll page generation) run: 

```bash
$ bundle install
``` 

Also install npm dependencies:

```bash
$ npm install
```

To build and start the **local development** website:

```bash
$ npm run local
```

This will run a webpack watch command, and jekyll will build and start a local development server. This allows you to edit jekyll, JS and SCSS and it will automatically recompile.

To do a manual single build run:

```bash
$ npm run build
```

Run eslint and prettier to see code formatting errors

```bash
$ npm run eslint
$ npm run prettier
```

To rewrite prettier errors automatically run:

```bash
$ prettier --write ./js-src/modules/**
```
