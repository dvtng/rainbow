const fs = require('fs');
const path = require('path');
const startStoryDevServer = require('./start-story-dev-server');
const EventEmitter = require('events');

const storyEntry = path.resolve(__dirname, '../../build/rainbow-entry.js');
const events = new EventEmitter();

const writeStoryEntry = contents =>
    new Promise((resolve, reject) => {
        fs.writeFile(storyEntry, contents, err => {
            if (err) {
                reject(err);
            } else {
                // Hack for webpack https://github.com/webpack/watchpack/issues/25
                const now = Date.now() / 1000;
                const then = now - 10;
                fs.utimes(storyEntry, then, then, err => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            }
        });
    });

module.exports = {
    start({ port }) {
        // Write empty story entry and start webpack dev server
        return writeStoryEntry('').then(() => startStoryDevServer({
            storyEntry,
            port,
            onDone: stats => {
                events.emit('done', stats.hash);
            }
        }));
    },

    setStory(file) {
        // Rewrite the story entry and wait for webpack to recompile
        const escapedFile = file.replace("'", "\\'");
        const compiledHash = new Promise((resolve, reject) => {
            events.once('done', hash => {
                resolve(hash);
            });
        });
        return writeStoryEntry(
            `module.exports = require('${escapedFile}');`
        ).then(() => compiledHash);
    }
};
