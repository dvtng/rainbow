import React from 'react';
import { Provider } from 'mobx-react';
import Typography from './typography';
import Nav from './nav';
import StoryViewer from './story-viewer';
import NavModel from './nav-model';

const Frame = Typography.extend`
    background-color: #606060;
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const nav = new NavModel();
nav.loadFileTree();

const App = () =>
    <Provider nav={nav}>
        <Frame>
            <Nav />
            <StoryViewer />
        </Frame>
    </Provider>;

export default App;
