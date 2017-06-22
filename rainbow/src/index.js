#! /usr/bin/env node

const storyFinder = require('./compiler/story-finder');

console.log('Finding all stories...');

storyFinder
    .getStoryFiles()
    .then(storyFiles => {
        console.log(storyFiles);
        console.log('\nExpanding stories...');
        return storyFiles;
    })
    .then(storyFiles => Promise.all(storyFiles.map(storyFinder.getStory)))
    .then(stories =>
        stories.map(story =>
            Object.assign({}, story, {
                scenes: Object.keys(story.scenes)
            })
        )
    )
    .then(all => console.log(all));
