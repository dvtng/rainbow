const path = require('path');
const fs = require('fs');
const { Observable } = require('rxjs');

const filePattern = /[/.]story\.(js|jsx|ts|tsx)/;

const readdir = Observable.bindNodeCallback(fs.readdir);
const stat = Observable.bindNodeCallback(fs.stat);

const walk = (dir, skip) =>
    readdir(dir).mergeMap(files =>
        Observable.from(files).mergeMap(file => {
            const filePath = path.resolve(dir, file);
            return stat(filePath).mergeMap(
                stat =>
                    stat.isDirectory()
                        ? skip && skip(filePath)
                          ? Observable.empty()
                          : walk(filePath, skip)
                        : Observable.of(filePath)
            );
        })
    );

module.exports = (cwd = process.cwd()) =>
    walk(cwd, dir => dir.endsWith('node_modules'))
        .filter(file => filePattern.test(file))
        .map(file => file.substr(cwd.length + 1));
