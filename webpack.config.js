 var webpack = require('webpack');

var PROD = JSON.parse(process.env.PROD_ENV || '0');
 module.exports = {
     entry: './src/app.js',
     output: {
         path: './bin',
         filename: 'array-utils.min.js'
     },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        minimize: false,
        compress: {
            warnings: true,
        },
        output: {
            comments: false,
        },
    })
  ]
 };