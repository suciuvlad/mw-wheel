var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/src/javascripts/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: '/',
    filename: "index.js"
  },

  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    },
    root: [
      __dirname + "/src/javascripts",
      __dirname + "/src/images",
      __dirname + "/src/scss",
      __dirname + "/src"
    ],
    extensions: ['', '.js', '.scss', '.svg', '.png']
  },

  module: {
    loaders: [
      { test: /pixi\.js/, loader: 'expose?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
      { test: /p2\.js/, loader: 'expose?p2' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },

      {
        test: /\.scss$/,
        loader: 'style!css!postcss-loader!sass'
      },

      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file'
      }

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html"
    })
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    host: '0.0.0.0',
    historyApiFallback: true,
    inline: true
  }
}
