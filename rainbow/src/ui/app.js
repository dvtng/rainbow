import React from 'react';
import styled from 'styled-components';
import { Provider } from 'mobx-react';
import Typography from './typography';
import Nav from './nav';
import StoryViewer from './story-viewer';
import NavModel from './nav-model';

const Frame = Typography.extend`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const nav = new NavModel();

const App = () =>
    <Provider nav={nav}>
        <Frame>
            <Nav />
            <StoryViewer />
        </Frame>
    </Provider>;

export default App;
