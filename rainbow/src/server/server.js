const express = require('express');
const path = require('path');
const {
    getStoryFiles,
    compileStory,
    startStoryDevServer
} = require('../compiler');
const storyTemplate = require('./story-template');

const cwd = process.cwd();

module.exports = ({ port }) => {
    const app = express();

    app.use(express.static(path.join(__dirname, 'static')));
    app.use(express.static(path.join(__dirname, '../../build')));

    // Get list of all story files
    app.get('/story-list', (req, res) => {
        getStoryFiles().then(storyFiles => res.send(storyFiles));
    });

    // Get compiled file contents
    app.get(/\/story-file\/(.*)/, (req, res) => {
        const storyFile = req.params[0];
        compileStory(path.join(cwd, storyFile)).then(
            output => res.send(output),
            error => res.send(error)
        );
    });

    // Renders the default story in a file
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
