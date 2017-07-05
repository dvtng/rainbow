import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import StoryError from './story-error';

class StoryViewer extends Component {
    setNewIframe = iframe => {
        if (!iframe) return;
        iframe.addEventListener('load', () => {
            const stories = iframe.contentWindow.stories
                ? Object.keys(iframe.contentWindow.stories)
                : [];
            this.props.setStories(stories);
        });

        const that = this;
        iframe.contentWindow.addEventListener('error', error => {
            console.log(error);
            that.props.storyErrored(error);
        });
    };

    getSrc = () =>
        this.props.src ||
        `/story/${this.props.selectedFile}#${this.props.selectedStory}`;

    render() {
        const { selectedFile, storyError } = this.props;
        return storyError
            ? <StoryError error={storyError} />
            : selectedFile
              ? <iframe
                    title="story"
                    key={selectedFile}
                    ref={this.setNewIframe}
                    style={{ border: 'none', width: '100%' }}
                    src={this.getSrc()}
                />
              : null;
    }
}

export default inject(stores => ({
    selectedFile: stores.nav.selectedFile,
    selectedStory: stores.nav.selectedStory,
    setStories: stores.nav.setStories,
    storyError: stores.nav.storyError,
    storyErrored: stores.nav.storyErrored
}))(observer(StoryViewer));
