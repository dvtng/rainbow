import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const Container = styled.div`
    padding: 6px 0;
`;

const Circle = styled.div`
    border: 1px solid #fff;
    border-radius: 50%;
    display: inline-block;
    height: 17px;
    margin-right: 8px;
    width: 17px;
    vertical-align: bottom;
`;

const ExplorerItem = ({ storyFile, children, nav }) =>
    <Container>
        <Circle />
        <a title={storyFile} onClick={() => nav.selectStoryFile(storyFile)}>
            {children}
        </a>
    </Container>;

export default inject('nav')(ExplorerItem);
