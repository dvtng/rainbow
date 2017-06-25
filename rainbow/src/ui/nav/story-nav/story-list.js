import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const StoryItem = styled.a`
    background-color: ${props =>
        props.isSelected ? '#606060' : 'transparent'};
    border-left: 4px solid;
    border-color: ${props => (props.isSelected ? '#C4C4C4' : 'transparent')};
    cursor: pointer;
    display: block;
    padding: 12px 16px;

    &:hover {
        background-color: #505050;
    }
`;

export const StoryList = ({ stories, selectedStory, onSelect }) =>
    stories
        ? <div>
              {stories.map(story =>
                  <StoryItem
                      key={story}
                      isSelected={selectedStory === story}
                      onClick={() => onSelect(story)}
                  >
                      {story}
                  </StoryItem>
              )}
          </div>
        : null;

export default inject(stores => ({
    stories: stores.nav.sortedStories,
    selectedStory: stores.nav.selectedStory,
    onSelect: stores.nav.selectStory
}))(observer(StoryList));
