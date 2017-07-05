import React from 'react';
import StoryViewer from './story-viewer';
import NavModel from './nav-model';
import { Provider } from 'mobx-react';
import Typography from './typography';

export default () => {
    const nav = new NavModel({});
    nav.selectFile('path/to/story.js');
    nav.setStories(['default']);
    return (
        <Typography>
            <Provider nav={nav}>
                <StoryViewer src={'/broken-story.html'} />
            </Provider>
        </Typography>
    );
};

export const rendersError = () => {
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
