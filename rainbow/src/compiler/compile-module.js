const webpack = require('webpack');
const MemoryFS = require('memory-fs');
const path = require('path');
const Module = require('module');

const getBaseWebpackConfig = () => {
    // TODO: detect project's webpack config
    return require('./webpack.config.js');
};

const getWebpackConfigFor = filename => {
    return Object.assign({}, getBaseWebpackConfig(), {
        entry: [filename],
        output: {
            path: '/',
            filename: 'bundle.js',
            libraryTarget: 'commonjs2'
        }
    });
};

const requireModuleFromString = (fileContents, filename) => {
    const m = new Module();
    m._compile(fileContents, filename);
    return m.exports;
};

module.exports = filename => {
    return new Promise((resolve, reject) => {
        const fs = new MemoryFS();
        const compiler = webpack(getWebpackConfigFor(filename));
        compiler.outputFileSystem = fs;
        compiler.run((err, stats) => {
            if (err) {
                reject(err);
            } else {
                const fileContents = fs.readFileSync('/bundle.js', 'utf8');
                resolve(requireModuleFromString(fileContents, filename));
            }
        });
    });
};
