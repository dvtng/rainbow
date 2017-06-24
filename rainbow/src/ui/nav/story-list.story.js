import React from 'react';
import { StoryList } from './story-list';

export default (
    <StoryList
        stories={['default', 'story1', 'story2']}
        selectedStory="story2"
        onSelect={() => {}}
    />
);
