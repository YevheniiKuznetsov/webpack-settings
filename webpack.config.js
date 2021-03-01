let path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//const sass = require('sass');
const webpack = require('webpack');
//const icons = require('glyphicons');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
             },
            
            {
              test: /\.css$/,
              use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {sourceMap: true}
                },
                {
                  loader: 'postcss-loader',
                  options: {sourceMap: true, config: {path: 'postcss.config.js'}}
                },
              ],
            },
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {sourceMap: true}
                },
                {
                  loader: 'postcss-loader',
                  options: {sourceMap: true, config: {path: 'postcss.config.js'}}
                },
                {
                  loader: 'sass-loader',
                  options: {sourceMap: true}
                }
              ],
            },
          
            
            
            
//            {
//              test: /\.css$/i,
//              use: [
//                MiniCssExtractPlugin.loader,
//                'css-loader'
//              ],
//            },
            {
                test: /\.(png|jpg|gif|svg|otf|ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
            } 
        ]
    },
    
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPlugin({
          
          filename: '[name].css',
          //chunkFilename: '[id].css',
        }),
        
    ],
}
module.exports = conf;
