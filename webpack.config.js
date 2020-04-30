const path = require('path');

module.exports = {

    //define mode of working development/production
    mode: 'development',

    //define watching
    watch: true,

    //define entry point
    entry: {
        bundle: './src/index.js'
    },
    devServer: {

        https: true
    },

    //define output point
    output: {

        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js',
    },

    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: { presets: ['es2015'] },
            },
            {
                test: /\.html$/,
                use: { loader: 'html-loader' },
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            }
        ],
    },
};