import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const Container = styled.div`
    padding: 6px 0;
`;

const OuterCircle = styled.div`
    border: 3px solid #275FA6;
    border-radius: 50%;
    height: 19px;
    width: 19px;
    margin-left: -4px;
    margin-top: -4px;
`;

const Circle = styled.div`
    border: 1px solid;
    border-color: ${props => (props.isSelected ? '#fff' : '#999')};
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