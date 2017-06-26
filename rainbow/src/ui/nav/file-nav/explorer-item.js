import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';
import Circle from './circle';
import { itemHeight, circleSize } from './sizes';

const Container = styled.div`
    padding: ${(itemHeight - circleSize) / 2}px 0;
`;

const OuterCircle = styled.div`
    border: 3px solid #275FA6;
    border-radius: 50%;
    box-sizing: border-box;
    height: ${circleSize + 6}px;
    width: ${circleSize + 6}px;
    margin-left: -4px;
    margin-top: -4px;
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

export const ExplorerItem = ({ storyFile, isSelected, children, onSelect }) =>
    <Container>
        <Circle isSelected={isSelected}>
            {isSelected && <OuterCircle />}
        </Circle>
        {storyFile
            ? <Link title={storyFile} onClick={() => onSelect(storyFile)}>
                  {children}
              </Link>
            : <Text>{children}</Text>}
    </Container>;

export default inject((stores, props) => ({
    onSelect: stores.nav.selectFile,
    isSelected: props.storyFile && stores.nav.selectedFile === props.storyFile
}))(ExplorerItem);
