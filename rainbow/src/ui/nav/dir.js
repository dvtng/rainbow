import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: #fff;
`;

const isDir = file => file.children && file.children.length;

const Dir = ({ name, children }) =>
    <Container>
        {name}
        <ul>
            {children.map(child =>
                <li key={child.name}>
                    {isDir(child)
                        ? <Dir name={child.name}>{child.children}</Dir>
                        : child.name}
                </li>
            )}
        </ul>
    </Container>;

export default Dir;
