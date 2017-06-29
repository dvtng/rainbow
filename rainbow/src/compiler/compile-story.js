const webpack = require('webpack');
const MemoryFS = require('memory-fs');
const path = require('path');
const addedWebpackConfig = require('./story-added.webpack.config');

const getBaseWebpackConfig = () => 
    // TODO: detect project's webpack config
     require('./story-default.webpack.config.js');

const getWebpackConfigFor = filename => Object.assign(
        {},
        getBaseWebpackConfig(),
        addedWebpackConfig(filename)
    );

// Compiles story in memory and returns compiled contents
module.exports = filename => new Promise((resolve, reject) => {
    const fs = new MemoryFS();
    const compiler = webpack(getWebpackConfigFor(filename));
    compiler.outputFileSystem = fs;
    compiler.run((err, stats) => {
        if (err) {
            reject(err);
        } else {
            const storyContents = fs.readFileSync('/story.js', 'utf8');
            resolve(storyContents);
        }
    });
});
