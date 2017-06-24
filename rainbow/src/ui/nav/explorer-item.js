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

const ExplorerItem = ({ storyFile, children, nav }) =>
    <Container>
        <Circle />
        {storyFile
            ? <Link
                  title={storyFile}
                  onClick={() => nav.selectStoryFile(storyFile)}
              >
                  {children}
              </Link>
            : <span>{children}</span>}
    </Container>;

export default inject('nav')(ExplorerItem);
