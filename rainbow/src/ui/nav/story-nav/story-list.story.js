import React from 'react';
import { StoryList } from './story-list';
import NavStyle from '../nav-style';
import Typography from '../../typography';

export default (
    <Typography>
        <NavStyle>
            <StoryList
                stories={['default', 'story1', 'story2']}
                selectedStory="story2"
                onSelect={() => {}}
            />
        </NavStyle>
    </Typography>
);

export const loadingState = (
    <Typography>
        <div style={{ display: 'flex' }}>
            <NavStyle>
                <StoryList stories={null} onSelect={() => {}} />
            </NavStyle>
            <NavStyle>
                <StoryList
                    stories={['default', 'story1', 'story2']}
                    selectedStory="story2"
                    onSelect={() => {}}
                />
            </NavStyle>
        </div>
    </Typography>
);
