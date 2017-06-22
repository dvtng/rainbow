import React from 'react';
import styled from 'styled-components';
import Typography from './typography';
import Container from './nav';
import Scene from './scene';

const Frame = Typography.extend`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const App = () =>
    <Frame>
        <Container />
        <Scene />
    </Frame>;

export default App;
