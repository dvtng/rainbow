import React from 'react';
import styled from 'styled-components';
import Typography from './typography';
import Nav from './nav';
import Scene from './scene';

const Frame = Typography.extend`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

export default () =>
    <Frame>
        <Nav />
        <Scene />
    </Frame>;
