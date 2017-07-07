import React from 'react';
import StoryViewer from './story-viewer';
import NavModel from './nav-model';
import { Provider } from 'mobx-react';
import Typography from './typography';

export const exampleStory = () => <p>Hello</p>;

export const showingStory = () => {
    const nav = new NavModel({});
    nav.selectFile('path/to/story.js');
    nav.setStories(['default']);
    return (
        <Typography>
            <Provider nav={nav}>
                <StoryViewer
                    src={'/story/src/ui/story-viewer.story.js#exampleStory'}
                />
            </Provider>
        </Typography>
    );
};

export const showingError = () => {
    const nav = new NavModel({});
    try {
        const a = 1;
        a();
    } catch (err) {
        nav.storyErrored(err);
    }
    return (
        <Typography>
            <Provider nav={nav}>
                <StoryViewer />
            </Provider>
        </Typography>
    );
};
