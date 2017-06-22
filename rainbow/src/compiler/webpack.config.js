/**
 * This is the default webpack config for building stories.
 * The webpack config used for building rainbow is at:
 * PROJECT_ROOT/webpack.config.js.
 */

const path = require('path');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        require('babel-preset-es2015'),
                        require('babel-preset-react')
                    ]
                },
                exclude: /node_modules/
            }
        ]
    },
    // Resolve webpack loaders to node_modules in rainbow,
    // rather than in consumer projects
    resolveLoader: {
        modules: [path.resolve(__dirname, '../../node_modules')]
    }
};
