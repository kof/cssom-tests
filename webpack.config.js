const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'atomic-immutable': './src/atomic-immutable.js',
    'atomic-reactive': './src/atomic-reactive.js',
    'batch-immutable': './src/batch-immutable.js',
    'batch-reactive': './src/batch-reactive.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
};

//src/atomic-immutable.js -o dist/atomic-immutable.js --mode=development --module-bind js=babel-loader --devtool=source-map
