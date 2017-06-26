import React from 'react';
import styled from 'styled-components';
import ExplorerItem from './explorer-item';
import { circleSize, itemHeight } from './sizes';

const indent = 22;

const Container = styled.div`
    color: #fff;
`;

const Ul = styled.ul`
    margin: 0;
    padding-left: ${indent}px;
`;

const Li = styled.li`
    list-style: none;
    position: relative;
`;

const VerticalLine = styled.div`
    background-color: #999;
    height: ${props => props.length * itemHeight - circleSize / 2}px;
    left: ${-indent + circleSize / 2}px;
    position: absolute;
    top: ${props =>
        itemHeight / 2 - (props.length * itemHeight - circleSize / 2)}px;
    width: 1px;
`;

const HorizontalLine = styled.div`
    background-color: #999;
    height: 1px;
    left: ${-indent + circleSize / 2}px;
    position: absolute;
    top: ${itemHeight / 2}px;
    width: ${indent - circleSize / 2}px;
`;

const isDir = file => file.children && file.children.length;

const Dir = ({ name, path, children }) =>
    <Container>
        <ExplorerItem>{name}</ExplorerItem>
        <Ul>
            {children.map((child, i) =>
                <Li key={child.name}>
                    <VerticalLine length={i + 1} />
                    <HorizontalLine />
                    {isDir(child)
                        ? <Dir name={child.name} path={path + child.name + '/'}>
                              {child.children}
                          </Dir>
                        : <ExplorerItem storyFile={path + child.name}>
                              {child.name}
                          </ExplorerItem>}
                </Li>
            )}
        </Ul>
    </Container>;

export default Dir;
