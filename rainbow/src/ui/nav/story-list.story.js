import React from 'react';
import { StoryList } from './story-list';

export default (
    <StoryList
        stories={['story1', 'story2', 'default']}
        selectedStory="story2"
        onSelect={() => {}}
    />
);
