const path = require('path');
const glob = require('glob');

const storyGlob = '**/@(*.story|story).+(js|jsx|ts|tsx)';

module.exports = (cwd = process.cwd()) => {
    return new Promise((resolve, reject) => {
        glob(storyGlob, { cwd }, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
};
