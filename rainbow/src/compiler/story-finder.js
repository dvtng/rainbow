const path = require('path');
const glob = require('glob');
const compileModule = require('./compile-module');

const storyGlob = '**/@(*.story|story).+(js|jsx|ts|tsx)';

exports.getStoryFiles = (cwd = process.cwd()) => {
    return new Promise((resolve, reject) => {
        glob(storyGlob, { cwd }, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files.map(file => path.join(cwd, file)));
            }
        });
    });
};

exports.getStory = storyFile =>
    compileModule(storyFile).then(storyExports => ({
        storyFile,
        scenes: storyExports
    }));
