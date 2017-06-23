import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const Iframe = styled.iframe`
    border: none;
    width: 100%;
`;

const StoryViewer = ({ nav }) =>
    nav.selectedStoryFile
        ? <Iframe src={`/story/${nav.selectedStoryFile}`} />
        : null;

export default inject('nav')(observer(StoryViewer));
