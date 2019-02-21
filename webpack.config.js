const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

/**
 * getEnv if configuration file is present
 * @returns {{}}
 */
function getApiKeys() {
  if (fs.existsSync(path.resolve('.env'))) {
    return dotenv.config().parsed;
  } else {
    console.warn(`No config file ('./.env') found. Using default API keys.`);
    return {
      GOOGLE_API_KEY: 'AIzaSyCV4SC6uTz7bzYu1TmM_3iq2smlvbJOVLg',
      GOOGLE_ENGINE: '008702682383656025817:4lkjxykfngo',
    };
  }
}

module.exports = {
  entry: {
    main: './js-src/main.js',
    formPage: './js-src/page-forms.js',
  },
  output: {
    path: path.resolve(__dirname, 'js'),
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(getApiKeys()),
    }),
  ],
};
