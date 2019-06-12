const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: ['./src/js/entry.js'],
    mode: 'production',
    output: {
        filename: 'main.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    optimization: {
     splitChunks: {
              chunks: 'all'
        }
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
            {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
};