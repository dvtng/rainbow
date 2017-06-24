import React from 'react';
import { inject, observer } from 'mobx-react';

const StoryList = ({ stories, onSelect }) =>
    stories
        ? <ul>
              {stories.map(story =>
                  <li key={story} onClick={() => onSelect(story)}>{story}</li>
              )}
          </ul>
        : null;

export default inject(stores => ({
    stories: stores.nav.stories,
    onSelect: stores.nav.selectStory
}))(observer(StoryList));
