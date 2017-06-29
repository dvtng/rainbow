import React from 'react';
import StoryViewer from './story-viewer';
import NavModel from './nav-model';
import { Provider } from 'mobx-react';

export default () => {
    const nav = new NavModel({});
    nav.selectFile('path/to/story.js');
    nav.setStories(['default']);
    return (
        <Provider nav={nav}>
            <StoryViewer src={'/broken-story.html'} />
        </Provider>
    );
};

export const rendersError = () => {
    const nav = new NavModel({});
    nav.storyErrored(new Error('This is a sample error'));
    return (
        <Provider nav={nav}>
            <StoryViewer />
        </Provider>
    );
};
