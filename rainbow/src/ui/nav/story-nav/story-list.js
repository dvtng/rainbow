import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Case from 'case';
import StoryItem from './story-item';

const Container = styled.div`
    padding-left: 24px;
`;

export const StoryList = ({ stories, selectedStory, onSelect }) =>
    (stories
        ? <Container>
            {stories.map(story => (
                <StoryItem
                  key={story}
                  isSelected={selectedStory === story}
                  onClick={() => onSelect(story)}
                >
                    {Case.sentence(story)}
                </StoryItem>
              ))}
        </Container>
        : null);

export default inject(stores => ({
    stories: stores.nav.stories,
    selectedStory: stores.nav.selectedStory,
    onSelect: stores.nav.selectStory
}))(observer(StoryList));
