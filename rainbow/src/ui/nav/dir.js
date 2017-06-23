import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: #fff;
`;

const Li = styled.li`
    list-style: none;
`;

const isDir = file => file.children && file.children.length;

const Dir = ({ name, children }) =>
    <Container>
        {name}
        <ul>
            {children.map(child =>
                <Li key={child.name}>
                    {isDir(child)
                        ? <Dir name={child.name}>{child.children}</Dir>
                        : child.name}
                </Li>
            )}
        </ul>
    </Container>;

export default Dir;
