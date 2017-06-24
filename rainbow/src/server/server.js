const express = require('express');
const path = require('path');
const {
    getStoryFiles,
    compileStory,
    startStoryDevServer
} = require('../compiler');
const storyTemplate = require('./story-template');
const { collapsedTree } = require('./tree.js');

const cwd = process.cwd();

module.exports = ({ port }) => {
    const app = express();

    app.use(express.static(path.join(__dirname, 'static')));
    app.use(express.static(path.join(__dirname, '../../build')));

    // Get list of all story files
    app.get('/story-list', (req, res) => {
        getStoryFiles().then(storyFiles => res.send(collapsedTree(storyFiles)));
    });

    // Renders a story file
    app.get(/\/story\/(.*)/, (req, res) => {
        const storyFile = req.params[0];
        const storyPort = port + 1;

        startStoryDevServer({
            filename: path.join(cwd, storyFile),
            port: storyPort
        });

        res.send(storyTemplate({ storyPort }));
    });

    app.listen(port);

    console.log(`Rainbow started at http://localhost:${port}`);
};
