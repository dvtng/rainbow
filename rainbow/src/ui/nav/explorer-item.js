import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const Container = styled.div`
    padding: 6px 0;
`;

const Circle = styled.div`
    border: 1px solid #999;
    border-radius: 50%;
    display: inline-block;
    height: 17px;
    margin-right: 8px;
    width: 17px;
    vertical-align: bottom;
`;

const Link = styled.a`
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const Text = styled.span`
    color: #999;
`;

export const ExplorerItem = ({ storyFile, children, onSelect }) =>
    <Container>
        <Circle />
        {storyFile
            ? <Link title={storyFile} onClick={() => onSelect(storyFile)}>
                  {children}
              </Link>
            : <Text>{children}</Text>}
    </Container>;

export default inject(stores => ({
    onSelect: stores.nav.selectStoryFile
}))(ExplorerItem);
