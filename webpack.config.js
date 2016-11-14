var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './lib',
    publicPath: '/lib/',
    library: 'paco-ui-vue',
    libraryTarget: 'umd',
    filename: 'index.js'
  },
  resolve: {
    root: path.resolve('./')
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue' },
      {
      	test: /\.js$/,
      	loader: 'babel',
        exclude: /node_modules/
      },
    ]
  },
  babel: {
  presets: ['es2015'],
  plugins: ['transform-runtime']
},
  devtool: 'source-map'
};


if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}