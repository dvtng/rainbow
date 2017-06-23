import React from 'react';
import styled from 'styled-components';
import ExplorerItem from './explorer-item';

const Container = styled.div`
    color: #fff;
`;

const Ul = styled.ul`
    margin: 0;
    padding-left: 22px;
`;

const Li = styled.li`
    list-style: none;
`;

const isDir = file => file.children && file.children.length;

const Dir = ({ name, path, children }) =>
    <Container>
        <ExplorerItem>{name}</ExplorerItem>
        <Ul>
            {children.map(child =>
                <Li key={child.name}>
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
