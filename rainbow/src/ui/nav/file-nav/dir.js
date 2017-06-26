import React from 'react';
import styled from 'styled-components';
import ExplorerItem from './explorer-item';
import { indent } from './sizes';
import { VerticalLine, HorizontalLine } from './lines';

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

const isDir = file => file.children && file.children.length;

const Dir = ({ name, path, children }) =>
    <Container>
        <ExplorerItem>{name}</ExplorerItem>
        <Ul>
            {children.map((child, i) =>
                <Li key={child.name}>
                    <VerticalLine segments={i + 1} />
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
