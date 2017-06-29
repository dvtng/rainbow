import React from 'react';
import StoryViewerConnected, { StoryViewer } from './story-viewer';
import NavModel from './nav-model';
import { Provider } from 'mobx-react';

export default () => {
    return (
        <StoryViewer
            selectedFile="src/ui/nav/story.js"
            selectedStory="default"
            setStories={() => {}}
            src={'/broken-story.html'}
        />
    );
};

export const rendersError = () => {
    const nav = new NavModel({});
    nav.storyErrored(new Error('This is a sample error'));
    return (
        <Provider nav={nav}>
            <StoryViewerConnected />
        </Provider>
    );
};
