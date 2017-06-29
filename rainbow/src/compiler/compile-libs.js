const webpack = require('webpack');
const webpackConfig = require('./libs.webpack.config');

// Compiles libs to file
module.exports = () =>
    new Promise((resolve, reject) => {
        const compiler = webpack(webpackConfig);
        compiler.run((err, stats) => {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        });
    });
