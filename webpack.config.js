
const path = require('path');

const mainConfig = Object.assign({}, {
  entry: {
    main: './js-src/main.js',
    mainSm: './js-src/mainSm.js',
  },
  output: {
    path: path.resolve(__dirname, 'js/bundles/'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }
});

const modulesConfig = Object.assign({}, {
  entry: {
    calculator: './js-src/modules/pricing/calculator.js',
  },
  output: {
    path: path.resolve(__dirname, 'js/bundles/lib/'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }
});

module.exports = [
  mainConfig, modulesConfig,
];
