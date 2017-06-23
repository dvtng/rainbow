const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const addedWebpackConfig = require('./story-added.webpack.config');

const getBaseWebpackConfig = () => {
    // TODO: detect project's webpack config
    return require('./story-default.webpack.config.js');
};

const getWebpackConfigFor = ({ filename, port }) => {
    return Object.assign(
        {},
        getBaseWebpackConfig(),
        addedWebpackConfig({ filename, port })
    );
};

let server = null;

module.exports = ({ filename, port }) => {
    if (server) {
        server.close();
    }

    const compiler = webpack(getWebpackConfigFor({ filename, port }));
    server = new WebpackDevServer(compiler, {
        stats: {
            colors: true
        }
    });
    server.listen(port);
    return server;
};
