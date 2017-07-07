import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import StoryError from './story-error';

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    margin: 16px;
    width: 100%;
`;

class StoryViewer extends Component {
    setNewIframe = iframe => {
        if (!iframe) return;
        iframe.addEventListener('load', () => {
            const stories = iframe.contentWindow.stories
                ? Object.keys(iframe.contentWindow.stories)
                : [];
            this.props.setStories(stories);
        });

        iframe.contentWindow.addEventListener('error', error => {
            this.props.storyErrored(error);
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
              ? <Container>
                    <iframe
                        title="story"
                        key={selectedFile}
                        ref={this.setNewIframe}
                        style={{ border: 'none', width: '100%' }}
                        src={this.getSrc()}
                    />
                </Container>
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
