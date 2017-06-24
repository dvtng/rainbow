import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class StoryViewer extends Component {
    setNewIframe = iframe => {
        if (!iframe) return;
        iframe.addEventListener('load', e => {
            const stories = Object.keys(iframe.contentWindow.stories);
            this.props.nav.setStories(stories);
        });
    };

    render() {
        const { nav } = this.props;
        return nav.selectedStoryFile
            ? <iframe
                  key={nav.selectedStoryFile}
                  ref={this.setNewIframe}
                  style={{ border: 'none', width: '100%' }}
                  src={`/story/${nav.selectedStoryFile}#${nav.selectedStory}`}
              />
            : null;
    }
}

export default inject('nav')(observer(StoryViewer));
