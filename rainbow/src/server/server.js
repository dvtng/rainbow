const express = require('express');
const path = require('path');
const { getStoryFiles, storyDevServer } = require('../compiler');
const storyTemplate = require('./story-template');
const { collapsedTree } = require('./tree');

const cwd = process.cwd();

module.exports = ({ port }) => {
    const storyPort = port + 1;
    const app = express();

    app.use(express.static(path.join(__dirname, 'static')));
    app.use(express.static(path.join(__dirname, '../../build')));

    // Get list of all story files
    app.get('/story-list', (req, res) => {
        getStoryFiles().then(storyFiles =>
            res.send(collapsedTree(storyFiles, path.basename(cwd)))
        );
    });

    // Renders a story file
    app.get(/\/story\/(.*)/, (req, res) => {
        const storyFile = req.params[0];

        storyDevServer.setStory(path.join(cwd, storyFile)).then(hash => {
            res.send(storyTemplate(`//localhost:${storyPort}/${hash}.js`));
        });
    });

    storyDevServer.start({ port: storyPort }).then(() => {
        app.listen(port);

        console.log(`Rainbow started at http://localhost:${port}`);
    });
};
