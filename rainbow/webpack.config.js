/**
 * This is the webpack config for building rainbow itself.
 */

const path = require('path');

module.exports = {
    entry: ['./src/ui/index'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map'
};
