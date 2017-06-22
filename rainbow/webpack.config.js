/**
 * This is the webpack config for building rainbow itself.
 * The webpack config used for building stories is at:
 * src/compiler/webpack.config.js.
 */

const path = require('path');

module.exports = {
    entry: ['./src/ui/index'],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
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
    }
};
