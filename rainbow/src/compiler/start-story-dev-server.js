const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const addedWebpackConfig = require('./story-added.webpack.config');

const getBaseWebpackConfig = () => {
    // Detect project's webpack config
    const projectWebpackConfigPath = path.join(
        process.cwd(),
        'webpack.config.js'
    );
    if (fs.existsSync(projectWebpackConfigPath)) {
        console.log('Detected webpack config at project root');
        return require(projectWebpackConfigPath);
    }

    // None found, use default config
    console.log('No webpack config at project root, using default config');
    return require('./story-default.webpack.config.js');
};

const getWebpackConfigFor = ({ filename, port }) =>
    Object.assign(
        {},
        getBaseWebpackConfig(),
        addedWebpackConfig({ filename, port })
    );

let server = null;

module.exports = ({ storyEntry, port, onDone }) => {
    if (server) {
        server.close();
    }

    console.log(`Starting webpack dev server at http://localhost:${port}`);

    return new Promise(resolve => {
        const compiler = webpack(
            getWebpackConfigFor({ filename: storyEntry, port })
        );
        compiler.plugin('done', onDone);
        server = new WebpackDevServer(compiler, {
            quiet: true
        });
        server.listen(port, 'localhost', () => {
            resolve(server);
        });
    });
};
