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
        <NavStyle>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                    <StoryList stories={null} onSelect={() => {}} />
                </div>
                <div style={{ width: '50%' }}>
                    <StoryList
                      stories={['default', 'story1', 'story2']}
                      selectedStory="story2"
                      onSelect={() => {}}
                    />
                </div>
            </div>
        </NavStyle>
    </Typography>
);
