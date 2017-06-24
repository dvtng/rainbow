import React from 'react';
import { inject, observer } from 'mobx-react';

const StoryList = ({ stories }) =>
    stories
        ? <ul>
              {stories.map(story => <li key={story}>{story}</li>)}
          </ul>
        : null;

export default inject(stores => ({
    stories: stores.nav.stories
}))(observer(StoryList));
