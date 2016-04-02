var ExtractTextPlugin = require("extract-text-webpack-plugin");
var poststylus = require('poststylus');
var doiuse = require('doiuse');
var postcssSorting = require('postcss-sorting');

module.exports = {
    cache: false,
    context: __dirname,
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exculde: /node_modules/,
                query: {presets: ['es2015'], plugins: ['add-module-exports']}
            },
            {test: /\.html$/, loader: 'html', exculde: /node_modules/},
            {test: /\.css$/, loader: 'style-loader!css-loader', exculde: /node_modules/},
            //{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader', exculde: /node_modules/ },
            {test: /\.styl$/, loader: ExtractTextPlugin.extract('css-loader?minimize!stylus-loader'), exculde: /node_modules/}
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css')
    ],
    stylus: {
        use: [poststylus([
            'autoprefixer', doiuse({browsers: ['ie > 8']}),
            'postcss-short', postcssSorting({"sort-order": "yandex"}),
            'postcss-cssnext', 'rucksack-css'])]
    }
};
