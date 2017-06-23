import React from 'react';
import styled from 'styled-components';
import Typography from './typography';
import Container from './nav';
import StoryViewer from './story-viewer';

const Frame = Typography.extend`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const App = () =>
    <Frame>
        <Container />
        <StoryViewer src="/story/src/ui/nav/story.js" />
    </Frame>;

export default App;
